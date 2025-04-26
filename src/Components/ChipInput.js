import { useState } from "react";

const ChipInput = () => {
  const [chips, setChips] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyEvent = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips([...chips, inputText.trim()]);
      setInputText("");
    }
  };
  const handleRemoveChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        onKeyUp={handleKeyEvent}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "lightgray",
              margin: "10px",
              padding: "5px 5px",
              borderRadius: "15px",
            }}
          >
            <span>{chip}</span>
            <button
              style={{
                background: "transaparent",
                border: "none",
                color: "red",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleRemoveChip(chip)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChipInput;
