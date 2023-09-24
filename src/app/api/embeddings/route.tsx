import { NextResponse } from "next/server";
import { allPosts } from "contentlayer/generated";
import { cleanTextForEmbedding, splitIntoChunksGPT } from "@/lib/embedding";
import { supabase } from "@/lib/supabase";
import { openai } from "@/lib/openai";

export const runtime = "edge";

export async function POST() {
  try {
    const postPromises = allPosts.map(async (post) => {
      const existingDocs = await supabase
        .from("documents")
        .select("url")
        .eq("url", post.url);
      if (existingDocs.data && existingDocs.data.length > 0) {
        await supabase.from("documents").delete().eq("url", post.url);
      }

      const content = cleanTextForEmbedding(post.body.raw);
      const chunks = splitIntoChunksGPT(content);

      const chunkPromises = chunks.map(async (chunk) => {
        const vector = {
          input: chunk.text,
          metadata: {
            title: post.title,
            url: post.url,
          },
        };

        const res = await openai.embeddings.create({
          input: vector.input,
          model: "text-embedding-ada-002",
        });
        const { embedding } = res.data[0];

        await supabase.from("documents").insert({
          title: vector.metadata.title,
          url: vector.metadata.url,
          content: vector.input,
          embedding,
        });
      });

      // Wait for all chunks of the current post to be processed
      await Promise.all(chunkPromises);
    });

    // Wait for all posts to be processed
    await Promise.all(postPromises);

    return NextResponse.json({
      message: "success",
    });
  } catch (error) {
    // Handle the error gracefully, you can also log it if needed
    return NextResponse.json({
      message: "fail to create embeddings",
    });
  }
}
