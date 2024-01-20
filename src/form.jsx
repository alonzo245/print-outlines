import { useRef } from "react";
import "./App.css";

function Form({ setText, setRowsInPage, setTextWeight }) {
  const textInputRef = useRef(null);
  const rowsInputRef = useRef(null);
  const checkboxRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(textInputRef.current.value);
    setRowsInPage(rowsInputRef.current.value);
    setTextWeight(checkboxRef.current.value);
    setTextWeight(checkboxRef.current.checked);
    console.log("textInputRef value:", textInputRef.current.value);
    console.log("textInputRef value:", textInputRef.current.value);
  };

  const handleTextWeight = () => {
    setTextWeight(() => (checkboxRef.current.checked === 600 ? 300 : 600));
  };
  return (
    <div className="form">
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div className="title">מספר שורות בכל דף</div>
      <div className="row">
        <input
          ref={rowsInputRef}
          onChange={setRowsInPage}
          defaultValue={65}
          type="number"
        />
        <input
          type="checkbox"
          ref={checkboxRef}
          onChange={handleTextWeight}
          defaultChecked
        />
      </div>
      <textarea ref={textInputRef} placeholder="הדבק טקסט כאן..." />
    </div>
  );
}

export default Form;
