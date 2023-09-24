import GPT3Tokenizer from "gpt3-tokenizer";

interface Chunk {
  text: string;
  start: number;
  end: number;
}

interface Tokenizer {
  encode: (text: string) => { text: string[] };
}

export function splitIntoChunksGPT(
  inputText: string,
  MAX_TOKEN: number = 100,
): Chunk[] {
  const chunks: Chunk[] = [];
  let chunk: Chunk = {
    text: "",
    start: 0,
    end: 0,
  };

  let start = 0;

  // Assuming you have GPT3Tokenizer type available
  const tokenizer: Tokenizer = new GPT3Tokenizer({ type: "gpt3" });
  const tokens = tokenizer.encode(inputText).text;

  for (const token of tokens) {
    const newText = chunk.text + token;

    if (newText.split(" ").length > MAX_TOKEN) {
      chunks.push(chunk);

      start += chunk.text.length + 1;

      chunk = {
        text: token,
        start,
        end: start + token.length,
      };
    } else {
      chunk = {
        ...chunk,
        text: newText,
        end: start + newText.length,
      };
    }
  }

  if (chunk.text) {
    chunks.push(chunk);
  }

  return chunks;
}

// Remove JSX syntax from a string
const removeJSX = (str: string): string => {
  const regex = /<[^>]+>/g;
  return str.replace(regex, "");
};

// Extract the link text from a markdown link
const extractLink = (str: string): string => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return str.replace(regex, (match, p1) => p1);
};
// Replace newline characters with spaces within a string
const replaceNewlineWithSpace = (str: string): string =>
  str.replace(/\n/g, " ");
// Remove emojis
const removeEmojis = (str: string): string => {
  const regex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
  return str.replace(regex, "");
};

export function cleanMDXFile(mdxContent: string) {
  const lines = mdxContent.split("\n");
  let currentContent = "";
  let inCodeBlock = false;

  for (const line of lines) {
    // Toggle the inCodeBlock flag when encountering code blocks
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
    }

    if (!inCodeBlock) {
      // Extract the link text from the line, remove any JSX syntax, and append it to the current section content
      const processed = extractLink(removeJSX(line));
      currentContent += `${processed}\n`;
    } else {
      // Append the line to the current section content when inside a code block
      currentContent += `${line}\n`;
    }

    // Replace newline characters with spaces in the current section content
    currentContent = replaceNewlineWithSpace(currentContent);
  }

  return currentContent;
}

export function cleanTextForEmbedding(text: string): string {
  // Remove header markdown syntax
  const removeHeaders = (str: string): string => str.replace(/^#+\s+/gm, "");

  // Remove inline code syntax
  const removeInlineCode = (str: string): string =>
    str.replace(/`([^`]+)`/g, "$1");

  // Apply the transformations
  let cleanedText = text;
  cleanedText = removeHeaders(cleanedText);
  cleanedText = removeInlineCode(cleanedText);
  cleanedText = removeJSX(cleanedText);
  cleanedText = extractLink(cleanedText);
  cleanedText = replaceNewlineWithSpace(cleanedText);
  cleanedText = removeEmojis(cleanedText);

  return cleanedText;
}
