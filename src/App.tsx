import { useState } from "react";
import "./App.css";
import { text } from "./text";
import Form from "./form";

function App() {
  const [text, setText] = useState("");

  function splitToPages(originalArray: any): Array<string[]> {
    const chunkSize = 65;
    const splitArrays = Array.from(
      { length: Math.ceil(originalArray.length / chunkSize) },
      (_, index) =>
        originalArray.slice(index * chunkSize, (index + 1) * chunkSize)
    );
    return splitArrays;
  }

  function processTextBlock(text: string): Array<string[]> {
    const paragraphs = text.split(/\n\s*\n/);
    const processedParagraphs = paragraphs.map((paragraph) => {
      const firstFourWords = paragraph.split(/\s+/).slice(0, 4).join("\n\n");
      return firstFourWords;
    });
    return splitToPages(processedParagraphs);
  }

  return (
    <div className="main">
      {!text ? (
        <Form setText={setText} />
      ) : (
        processTextBlock(text).map((page, i) => {
          return (
            <div className="page" key={i}>
              {page.map((line, k) => {
                return (
                  <div className="line" key={k}>
                    {line}
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
