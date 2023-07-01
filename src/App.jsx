import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1>Markdown Preview</h1>
      <div className="container">
        <textarea
          name="input"
          id="input"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
