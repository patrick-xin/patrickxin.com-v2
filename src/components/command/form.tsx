import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type InputSearchProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
};
const InputSearch = ({
  handleInputChange,
  handleSubmit,
  input,
}: InputSearchProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && containerRef.current) {
        e.preventDefault();
        const formElement = containerRef.current.querySelector("form");

        if (formElement) {
          formElement.dispatchEvent(new Event("submit", { bubbles: true }));
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div className="absolute inset-x-0 bottom-0 p-4" ref={containerRef}>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-3"
      >
        <Input
          ref={ref}
          value={input}
          placeholder="Ask me anything about my posts..."
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          disabled={input.length === 0}
          className="relative"
          variant="outline"
        >
          <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-l from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-md transition-all duration-200 group-hover:scale-110" />
          Go!
        </Button>
      </form>
    </div>
  );
};

export default InputSearch;
