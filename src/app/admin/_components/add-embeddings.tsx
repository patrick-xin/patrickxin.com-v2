"use client";

import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const AddEmbeddings = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      await fetch("/api/embeddings", {
        method: "POST",
      });
      setLoading(false);
    } catch (e) {
      setError("Error create embeddings");
      setLoading(false);
    }
  };
  return (
    <div>
      {error ? <div className="text-red-600">{error}</div> : null}

      <Button disabled={loading} onClick={handleClick}>
        {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
        Add Embeddings
      </Button>
    </div>
  );
};
export default AddEmbeddings;
