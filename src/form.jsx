import { useRef } from "react";
import "./App.css";

function Form({ setText }) {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(inputRef.current.value);
    console.log("Input value:", inputRef.current.value);
  };

  return (
    <div className="form">
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <textarea ref={inputRef} />
    </div>
  );
}

export default Form;
