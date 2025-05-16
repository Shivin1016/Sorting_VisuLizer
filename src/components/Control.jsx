import React from "react";

const Control = ({
  generateNewArray,
  handleSorting,
  userInputArray,
  setUserInputArray,
  setSpeed,
  isSorting, 
  reSet,
  selectedSorting,
}) => {
  return (
    <div className="controls-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={userInputArray}
          onChange={(e) => setUserInputArray(e.target.value)}
          className="neumorphic-input"
          placeholder="Enter Your Array Between 1 - 500"
        />
        <div className="info-icon-wrapper">
          <i className="info-icon">i</i>
          <span className="tooltip-text">
            Provide array by comma seprated Integer
          </span>
        </div>
      </div>

      <button className="neu-button" onClick={generateNewArray}>
        Generate New Array
      </button>
      <button className="neu-button" onClick={reSet}>
        Reset
      </button>
      <select
        className="neumorphism-dropdown"
        value={selectedSorting}
        onChange={handleSorting}
      >
        <option value="">Select Sorting</option>
        <option value="bubbleSort">Bubble Sorting</option>
        <option value="bubbleSort">Merge Sorting</option>
        <option value="bubbleSort">Selection Sorting</option>
      </select>

      <label>
        Speed:
        <input
          type="range"
          min="10"
          max="200"
          className="speedControl"
          onChange={(e) => setSpeed(200 - e.target.value)}
          disabled={isSorting}
        />
      </label>
    </div>
  );
};

export default Control;
