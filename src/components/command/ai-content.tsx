"use client";

import { useCompletion } from "ai/react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import type { FormEvent } from "react";
import { useEffect, useRef } from "react";
import { useAIStore } from "@/store/ai";
import MarkdownRenderer from "./markdown";
import InputSearch from "./form";
import { Button } from "../ui/button";

const AIContent = () => {
  const {
    toggleAiContent,
    setLoading,
    showIntro,
    toggleIntro,
    showInput,
    toggleInput,
  } = useAIStore();
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
  } = useCompletion({
    api: "/api/completion",
    onFinish: () => {
      setInput("");
      toggleInput(true);
      setLoading(false);
      toggleIntro(false);
    },
  });

  useEffect(() => {
    if (completion && completion.length > 0) {
      setLoading(false);
    }
  }, [isLoading, completion, setLoading]);
  const responseBodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isLoading && responseBodyRef.current) {
      responseBodyRef.current.scrollTop = responseBodyRef.current.scrollHeight;
    }
  }, [isLoading]);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    handleSubmit(e);
    toggleIntro(false);
    toggleInput(false);
  };
  return (
    <div className="relative flex h-[50vh] p-4">
      {showInput && (
        <div className="absolute left-2 top-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              toggleAiContent(false);
              toggleIntro(true);
            }}
          >
            <ArrowLeftIcon className="h-4 w-6 cursor-pointer" />
          </Button>
        </div>
      )}

      {showIntro && (
        <div className="mt-8">
          <div>
            <div className="space-y-4 text-sm">
              <div>Dear reader,</div>
              <div>
                I built this AI powered mini-search engine to learn more about
                OpenAI and embeddings, try new UX patterns while also exploring
                new ways for my readers to interact with my content. This is an
                experimental feature.
              </div>
              <div>
                Ask me anything about my blog posts, a topic, or projects by
                typing your question or selecting one of the examples below.
              </div>
            </div>
          </div>
        </div>
      )}

      {!showIntro && (
        <div
          className="mb-10 mt-2 w-full overflow-auto scroll-smooth"
          ref={responseBodyRef}
        >
          {!showInput && <div className="-mb-6 text-lg">{input}</div>}
          <MarkdownRenderer content={completion} />
        </div>
      )}

      {showInput && (
        <InputSearch
          handleInputChange={handleInputChange}
          handleSubmit={handleSearch}
          input={input}
        />
      )}
    </div>
  );
};

export default AIContent;
