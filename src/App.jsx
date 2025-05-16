import { useEffect, useState } from "react";
import "./App.css";
import "./components/SortingVs";
import SortingVs from "./components/SortingVs";
import Control from "./components/control";
import { bubbleSort } from "./algorithm/bubbleSort";

function App() {
  const [array, setArray] = useState([]);
  const [userInputArray, setUserInputArray] = useState("");

  useEffect(() => {
    const userInput = userInputArray.split(",");

    const filteredInput = userInput
      .filter((item) => !isNaN(item) && Number.isInteger(parseFloat(item)))
      .map((item) => Number(item) <= 500 && Number(item));

    setArray([...filteredInput]);
  }, [userInputArray]);

  const generateNewArray = () => {
    const newArray = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 500)
    );
    setArray(newArray);
  };

  const handleSorting = (e) => {
    const sortingMethod = e.target.value;

    switch (sortingMethod) {
      case "bubbleSort":
        const animationArr = bubbleSort(array);
        bubbleAnimation(animationArr);
        break;

      default:
        break;
    }
  };

  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName("bar");

    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, barTwoInd, swap] = animation[i];

      let barOne = barEle[barOneInd];
      let barTwo = barEle[barTwoInd];

      // console.log(barOne , "this" , barTwo);

      setTimeout(() => {
        //if swaping occurs then change the colors
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          // console.log(heightTemp);

          //change content height
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }

        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, 150);
      }, i * 150);
    }

    setTimeout(() => {
      for (let i = 0; i < barEle.length; i++) {
        setTimeout(() => {
          barEle[i].style.backgroundColor = "green";
        }, i * 150);
      }
    }, animation.length * 150);
  }

  return (
    <>
      <Control
        generateNewArray={generateNewArray}
        handleSorting={handleSorting}
        userInputArray={userInputArray}
        setUserInputArray={setUserInputArray}
      />
      <SortingVs array={array} />
    </>
  );
}

export default App;
