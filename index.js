import { getMergeSortAnimations } from "./mergesort.js";
import { getBubbleSortAnimations } from "./bubblesort.js";
import { getInsertionSortAnimations } from "./insertionsort.js";

const heading=document.getElementById('heading');

const generateArrayKey=document.getElementById('generate');
generateArrayKey.addEventListener("click", generateArray);
const getmergesort=document.getElementById('merge');
getmergesort.addEventListener("click", mergeSort);
const getbubblesort=document.getElementById('bubble');
getbubblesort.addEventListener("click", bubbleSort);
const getinsertionsort=document.getElementById('insertion');
getinsertionsort.addEventListener("click", insertionSort);

const body=document.getElementById('mainbody');
var array=[];
generateArray();

function generateArray(){
    array=[];
    let i=1;
    for(i=1;i<=100;i++){
   let temp= Math.floor(Math.random()*(500-5)+5);
   array.push(temp);
    }
    changeArray();
}

function changeArray(){
for(let i=0;i<100;i++){
    var div=document.createElement('div');
    div.className='bars';
    div.innerHTML=":";
    div.id=`${array[i]}#`;
    div.style.height=`${array[i]}px`;
    body.appendChild(div);
}
}

function mergeSort() {
    heading.textContent='Merge Sort';
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bars');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'green';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  }

  function bubbleSort(){
    heading.textContent='Bubble Sort';
    const animations=getBubbleSortAnimations(array);
   for(let i=0;i<animations.length;i++){
    const arrayBars = document.getElementsByClassName('bars');
    const [firstInd,secondInd,firstvalue,secondvalue]=animations[i];
    const barOneStyle = arrayBars[firstInd].style;
    const barTwoStyle = arrayBars[secondInd].style;
    setTimeout(() => {
      barOneStyle.backgroundColor='red';
      barTwoStyle.backgroundColor='red';
    }, i*5);
    setTimeout(() => {
      barOneStyle.height=`${firstvalue}px`;
      barTwoStyle.height=`${secondvalue}px`;
    }, i*5);
    setTimeout(() => {
      barOneStyle.backgroundColor='green';
      barTwoStyle.backgroundColor='green';
    }, i*5);
   }
  }


  function insertionSort(){
    heading.textContent='Insertion Sort';
    const animations=getInsertionSortAnimations(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      const [firstInd,secondInd,firstvalue]=animations[i];
      const barOneStyle = arrayBars[firstInd].style;
      const barTwoStyle = arrayBars[secondInd].style;
      setTimeout(() => {
        barOneStyle.backgroundColor='red';
        barTwoStyle.backgroundColor='red';
      }, i*5);
      setTimeout(() => {
        barOneStyle.height=`${firstvalue}px`;
      }, i*5);
      setTimeout(() => {
        barOneStyle.backgroundColor='green';
        barTwoStyle.backgroundColor='green';
      }, i*5);

    }
  }