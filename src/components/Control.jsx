import React from 'react'

const Control = ({generateNewArray ,handleSorting ,userInputArray , setUserInputArray}) => {
  return (
    <div className = "controls-container">
        <div className="input-wrapper">
            <input type="text" value={userInputArray} onChange={(e) => setUserInputArray(e.target.value)} className = "neumorphic-input" placeholder='Enter Your Array Between 1 - 500' />
            <div className="info-icon-wrapper">
                <i className ='info-icon'>i</i>
                <span className = 'tooltip-text'>
                    Provide array by comma seprated Integer
                </span>
            </div>
        </div>

      <button className = "neu-button" onClick={generateNewArray}>
        Generate New Array
      </button>
      <select className = "neumorphism-dropdown" onChange={handleSorting}>
        <option value="">Select Sorting</option>
        <option value="bubbleSort">Bubble Sorting</option> 
        <option value="bubbleSort">Selection Sorting</option> 
        <option value="bubbleSort">Merge Sorting</option> 
      </select>
    </div>
  )
}

export default Control

