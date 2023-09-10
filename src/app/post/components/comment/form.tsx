/* eslint-disable */ // @ts-nocheck

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { usePostComments } from "../../hooks";

const COMMENT_FORM_SCHEMA = z.object({
  content: z
    .string()
    .min(10, { message: "Please leave something meaningful! 👻" })
    .max(2000, { message: "Wow, you've got lots to say!" }),
});

type FormSchemaType = z.infer<typeof COMMENT_FORM_SCHEMA>;

const CommentForm = ({ slug }: { slug: string }) => {
  const { data: session } = useSession();
  const { comments, mutate, isLoading } = usePostComments(slug);
  const form = useForm<FormSchemaType>({
    // TODO: fix COMMENT_FORM_SCHEMA Error
    resolver: zodResolver(COMMENT_FORM_SCHEMA),
  });
  const { toast } = useToast();
  const buttonDisabled = isLoading || form.formState.isSubmitting;
  async function onSubmit(values: FormSchemaType) {
    const res = await fetch(`/post/${slug}/api/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: values.content,
        userId: session?.user.id,
      }),
    });
    const data = await res.json();

    if (data.success) {
      toast({
        title: "Comment added!",
        description: "I'll get back to you soon. Remember to come back!",
      });
      mutate({ comments: data.comments, ...comments });

      form.setValue("content", "");
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    rows={10}
                    placeholder="Questions? Thoughts? Drop a comment here!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            {session ? (
              <Button
                disabled={buttonDisabled}
                className="disabled:cursor-not-allowed"
                type="submit"
                variant="outline"
              >
                Submit
              </Button>
            ) : (
              <div className="group relative mt-2">
                <Button asChild variant="outline">
                  <div>
                    <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md transition-all duration-200 group-hover:scale-110" />
                    <Link
                      href={{
                        pathname: "/signin",
                        query: { callbackUrl: `/post/${slug}` },
                      }}
                    >
                      Sign in to comment
                    </Link>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
