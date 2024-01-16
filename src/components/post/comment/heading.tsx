import React from "react";

type CommentHeadingProps = {
  text: string;
};

const CommentHeading = ({ text }: CommentHeadingProps) => {
  return (
    <div
      id="comments"
      className="font-heading text-xl tracking-wider md:text-2xl lg:text-3xl"
    >
      {text}
    </div>
  );
};

export default CommentHeading;
