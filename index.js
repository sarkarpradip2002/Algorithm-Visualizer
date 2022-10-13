// Importing the sorting algorithm animations from the js files
import { getMergeSortAnimations } from "./mergesort.js";
import { getBubbleSortAnimations } from "./bubblesort.js";
import { getInsertionSortAnimations } from "./insertionsort.js";
import { getSelectionSortAnimations } from "./selectionsort.js";

// Adding audio
var audio=new Audio('beep3.mp3');

// All the DOM elemnets
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

const heading=document.getElementById('heading');
const changeheading=document.getElementById('changehead');
var output = document.getElementById("demo");
output.innerHTML = 100;

// Initilize the onclickhandelers
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

// Deafult Array
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
  div.style.width=`${Math.floor(400/100)}px`;
  body.appendChild(div);
}

// Change the array as the slider value
var arrayval=100;
slider.oninput = function() {
  output.innerHTML = slider.value;
  arrayval=this.value;
  array=[];
    let i=1;
    for(i=1;i<=this.value;i++){
   let temp= Math.floor(Math.random()*(500-5)+5);
   array.push(temp);
    }

  while (body.firstChild) {
    body.removeChild(body.firstChild);
}

for(let i=0;i<this.value;i++){
  var div=document.createElement('div');
  div.className='bars';
  div.innerHTML=`${array[i]}`;
  div.style.height=`${array[i]}px`;
  div.style.width=`${Math.floor(400/this.value)}px`;
  body.appendChild(div);
}
}

// Generate an random array by clicking generate array
function generateArray(){
  changeheading.innerText='Random array is generated';
    array=[];
    let i=1;
    for(i=1;i<=arrayval;i++){
   let temp= Math.floor(Math.random()*(500-5)+5);
   array.push(temp);
    }
    changeArray();
}

function changeArray(){
  const arrayBars = document.getElementsByClassName('bars');
  for(let i=0;i<arrayval;i++){
    arrayBars[i].style.height=`${array[i]}px`;
    arrayBars[i].innerHTML=`${array[i]}`;
    arrayBars[i].style.backgroundColor='#00bcd4';
  } 
}

// Merge sort button animations 
function mergeSort() {
    changeheading.textContent='Merge Sort';
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
        }, i * (1000/arrayval));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          arrayBars[barOneIdx].innerHTML=`${newHeight}`;
          audio.play();
          barOneStyle.color='#e91e63';
        }, i * (1000/arrayval));
      }
    }
  }

  // Bubble sort button animations
  function bubbleSort(){
    changeheading.textContent='Bubble Sort';
    const animations=getBubbleSortAnimations(array);
   for(let i=0;i<animations.length;i++){
    const arrayBars = document.getElementsByClassName('bars');
    const [firstInd,secondInd,firstvalue,secondvalue]=animations[i];
    const barOneStyle = arrayBars[firstInd].style;
    const barTwoStyle = arrayBars[secondInd].style;
    setTimeout(() => {
      barOneStyle.backgroundColor='red';
      barTwoStyle.backgroundColor='red';
    }, i*(500/arrayval));
    setTimeout(() => {
      audio.play();
      barOneStyle.height=`${firstvalue}px`;
      arrayBars[firstInd].innerHTML=`${firstvalue}`;
      barOneStyle.color='#e91e63';
      barTwoStyle.height=`${secondvalue}px`;
      arrayBars[secondInd].innerHTML=`${secondvalue}`;
      barTwoStyle.color='#e91e63';
    }, i*(500/arrayval));
    setTimeout(() => {
      barOneStyle.backgroundColor='#acf755';
      barTwoStyle.backgroundColor='#acf755';
    }, i*(500/arrayval));
   }
  }

// Insertion sort button animations
  function insertionSort(){
    changeheading.textContent='Insertion Sort';
    const animations=getInsertionSortAnimations(array);
    for(let i=0;i<animations.length;i++){
      const arrayBars = document.getElementsByClassName('bars');
      const [firstInd,secondInd,firstvalue]=animations[i];
      const barOneStyle = arrayBars[firstInd].style;
      const barTwoStyle = arrayBars[secondInd].style;
      setTimeout(() => {
        barOneStyle.backgroundColor='red';
        barTwoStyle.backgroundColor='red';
      }, i*(500/arrayval));
      setTimeout(() => {
        audio.play();
        barOneStyle.height=`${firstvalue}px`;
        barOneStyle.color='#e91e63';
        arrayBars[firstInd].innerHTML=`${firstvalue}`;
      }, i*(500/arrayval));
      setTimeout(() => {
        barOneStyle.backgroundColor='#acf755';
        barTwoStyle.backgroundColor='#acf755';
      }, i*(500/arrayval));

    }
  }

// Selection sort button animations
  function selectionSort() {
    changeheading.textContent='Selection Sort';
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
        }, i*(1000/arrayval));
        setTimeout(() => {
          barOneStyle.backgroundColor='blue';
          barTwoStyle.backgroundColor='blue';
        }, i*(1000/arrayval));
      }
      else if(animations[i].length===1){
        const [changeInd]=animations[i];
        const changeStyle = arrayBars[changeInd].style;
        setTimeout(() => {
          changeStyle.backgroundColor='red';
        }, i*(1000/arrayval));
      }
      
      else{  const [firstInd,secondInd,firstvalue,secondvalue]=animations[i];
        const barOneStyle = arrayBars[firstInd].style;
        const barTwoStyle = arrayBars[secondInd].style;
        setTimeout(() => {
          barOneStyle.backgroundColor='red';
          barTwoStyle.backgroundColor='red';
        }, i*(1000/arrayval));
        setTimeout(() => {
          audio.play();
          barOneStyle.height=`${firstvalue}px`;
          arrayBars[firstInd].innerHTML=`${firstvalue}`;
          barOneStyle.color='#e91e63';
           barTwoStyle.height=`${secondvalue}px`;
           arrayBars[secondInd].innerHTML=`${secondvalue}`;
           barTwoStyle.color='#e91e63';
        }, i*(1000/arrayval));
        setTimeout(() => {
          barOneStyle.backgroundColor='#acf755';
          barTwoStyle.backgroundColor='#acf755';
        }, i*(1000/arrayval));
      }
    }
  }