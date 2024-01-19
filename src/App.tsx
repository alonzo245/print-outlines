import { useState } from "react";
import "./App.css";
import Form from "./form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

  const Home = (
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/print-outlines" element={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
