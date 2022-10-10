import { getMergeSortAnimations } from "./mergesort.js";
import { getBubbleSortAnimations } from "./bubblesort.js";
import { getInsertionSortAnimations } from "./insertionsort.js";
import { getSelectionSortAnimations } from "./selectionsort.js";
<<<<<<< HEAD
=======
var audio = new Audio('beep3.mp3');
>>>>>>> 5718530 (Adding changes)

const heading=document.getElementById('heading');

const generateArrayKey=document.getElementById('generate');
generateArrayKey.addEventListener("click", generateArray);
const getmergesort=document.getElementById('merge');
getmergesort.addEventListener("click", mergeSort);
const getbubblesort=document.getElementById('bubble');
getbubblesort.addEventListener("click", bubbleSort);
const getinsertionsort=document.getElementById('insertion');
getinsertionsort.addEventListener("click", insertionSort);
const getselectionsort=document.getElementById('selection');
getselectionsort.addEventListener("click", selectionSort);

const body=document.getElementById('mainbody');
var array=[];
array=[];
    let i=1;
    for(i=1;i<=100;i++){
   let temp= Math.floor(Math.random()*(500-5)+5);
   array.push(temp);
    }

for(let i=0;i<100;i++){
  var div=document.createElement('div');
  div.className='bars';
  div.innerHTML=`${array[i]}`;
  div.style.height=`${array[i]}px`;
  body.appendChild(div);
}

function generateArray(){
  heading.textContent='Random array is generated';
    array=[];
    let i=1;
    for(i=1;i<=100;i++){
   let temp= Math.floor(Math.random()*(500-5)+5);
   array.push(temp);
    }
    changeArray();
}

function changeArray(){
  const arrayBars = document.getElementsByClassName('bars');
  for(let i=0;i<100;i++){
    arrayBars[i].style.height=`${array[i]}px`;
    arrayBars[i].innerHTML=`${array[i]}`;
    arrayBars[i].style.backgroundColor='#00bcd4';
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
        const color = i % 3 === 0 ? 'red' : '#acf755';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          arrayBars[barOneIdx].innerHTML=`${newHeight}`;
<<<<<<< HEAD
=======
          audio.play();
>>>>>>> 5718530 (Adding changes)
          barOneStyle.color='#e91e63';
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
<<<<<<< HEAD
=======
      audio.play();
>>>>>>> 5718530 (Adding changes)
      barOneStyle.height=`${firstvalue}px`;
      arrayBars[firstInd].innerHTML=`${firstvalue}`;
      barOneStyle.color='#e91e63';
      barTwoStyle.height=`${secondvalue}px`;
      arrayBars[secondInd].innerHTML=`${secondvalue}`;
      barTwoStyle.color='#e91e63';
    }, i*5);
    setTimeout(() => {
      barOneStyle.backgroundColor='#acf755';
      barTwoStyle.backgroundColor='#acf755';
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
<<<<<<< HEAD
=======
        audio.play();
>>>>>>> 5718530 (Adding changes)
        barOneStyle.height=`${firstvalue}px`;
        barOneStyle.color='#e91e63';
        arrayBars[firstInd].innerHTML=`${firstvalue}`;
      }, i*5);
      setTimeout(() => {
        barOneStyle.backgroundColor='#acf755';
        barTwoStyle.backgroundColor='#acf755';
      }, i*5);

    }
  }


  function selectionSort() {
    heading.textContent='Selection Sort';
    const animations=getSelectionSortAnimations(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      if(animations[i].length===2){
        const [firstInd,secondInd]=animations[i];
        const barOneStyle = arrayBars[firstInd].style;
        const barTwoStyle = arrayBars[secondInd].style;
        setTimeout(() => {
          barOneStyle.backgroundColor='black';
          barTwoStyle.backgroundColor='black';
        }, i*5);
        setTimeout(() => {
          barOneStyle.backgroundColor='blue';
          barTwoStyle.backgroundColor='blue';
        }, i*5);
      }
      else if(animations[i].length===1){
        const [changeInd]=animations[i];
        const changeStyle = arrayBars[changeInd].style;
        setTimeout(() => {
          changeStyle.backgroundColor='red';
        }, i*5);
      }
      
      else{  const [firstInd,secondInd,firstvalue,secondvalue]=animations[i];
        const barOneStyle = arrayBars[firstInd].style;
        const barTwoStyle = arrayBars[secondInd].style;
        setTimeout(() => {
          barOneStyle.backgroundColor='red';
          barTwoStyle.backgroundColor='red';
        }, i*5);
        setTimeout(() => {
<<<<<<< HEAD
=======
          audio.play();
>>>>>>> 5718530 (Adding changes)
          barOneStyle.height=`${firstvalue}px`;
          arrayBars[firstInd].innerHTML=`${firstvalue}`;
          barOneStyle.color='#e91e63';
           barTwoStyle.height=`${secondvalue}px`;
           arrayBars[secondInd].innerHTML=`${secondvalue}`;
           barTwoStyle.color='#e91e63';
        }, i*5);
        setTimeout(() => {
          barOneStyle.backgroundColor='#acf755';
          barTwoStyle.backgroundColor='#acf755';
        }, i*5);
      }
    }
  }