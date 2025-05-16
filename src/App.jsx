import { useEffect, useState } from "react";
import "./App.css";
import "./components/SortingVs";
import SortingVs from "./components/SortingVs";
import Control from "./components/control";
import { bubbleSort } from "./algorithm/bubbleSort";
import { MergeSort } from "./algorithm/mergeSort";
import { selectionSort } from "./algorithm/selectionSort";

function App() {
  const [array, setArray] = useState([]);
  const [userInputArray, setUserInputArray] = useState("");
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState("");

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

  const reSet = () => {
    setArray([]);
    setSelectedSorting("");
  };

  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    let animationArr = [];

    switch (sortingMethod) {
      case "bubbleSort":
        animationArr = bubbleSort(array);
        bubbleAnimation(animationArr);
        break;
      case "Merge Sorting":
        animationArr = MergeSort(array);
        mergeAnimation(animationArr);
      case "Selection Sorting":
        animationArr = selectionSort(array);
        selectionAnimation(animationArr);

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
        }, speed);
      }, i * speed);
    }

    setTimeout(() => {
      for (let i = 0; i < barEle.length; i++) {
        setTimeout(() => {
          barEle[i].style.backgroundColor = "green";
        }, i * 150);
      }
    }, animation.length * 150);
  }

  const mergeAnimation = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";
        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  const selectionAnimation = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerHTML;
          barOne.innerHTML = barTwo.innerHTML;
          barTwo.innerHTML = tempContent;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  return (
    <>
      <center className="main">
        <h1>Sorting Make Easy</h1>
      </center>
      <Control
        generateNewArray={generateNewArray}
        handleSorting={handleSorting}
        userInputArray={userInputArray}
        setUserInputArray={setUserInputArray}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}
      />
      <SortingVs array={array} />
    </>
  );
}

export default App;
