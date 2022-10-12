import { getBruteForceAnimations } from "./bruteforcesearch.js";
import { getBinaryAnimation } from "./binarysearch.js";
var audio = new Audio('beep3.mp3');

let body=document.getElementById("body");
let getnumber=document.getElementById("box");
let appendresult=document.getElementById("result");

const generateArrayKey=document.getElementById('generate');
generateArrayKey.addEventListener("click", generateArray);
const getbruteforce=document.getElementById('bruteforce');
getbruteforce.addEventListener("click", bruteForce);
const getbinarysearch=document.getElementById('binary');
getbinarysearch.addEventListener("click", binarySearch);

let array=[];

let i=1;
for(i=1;i<=30;i++){
let temp= Math.floor(Math.random()*(50));
array.push(temp);
}

for(let i=0;i<30;i++){
var div=document.createElement('div');
  div.className='grids';
  div.innerHTML=`${array[i]}`;
  div.style.height=`${Math.floor(array[i]*5+3)}px`;
  body.appendChild(div);
}

function generateArray() {
    array=[];
    console.log(array);
    let i=1;
for(i=1;i<=30;i++){
let temp= Math.floor(Math.random()*(50));
array.push(temp);
}
const arraygrids = document.getElementsByClassName('grids');
for(let i=0;i<30;i++){
    arraygrids[i].innerHTML=`${array[i]}`;
  arraygrids[i].style.height=`${array[i]*5+3}px`;
  arraygrids[i].style.backgroundColor='#7f38ff';
} 
}

 function bruteForce(){
    const mainarraygrids = document.getElementsByClassName('grids');
for(let i=0;i<30;i++){
  mainarraygrids[i].style.backgroundColor='#7f38ff';
} 
   const animations= getBruteForceAnimations(array,getnumber.value);
    for(let i=0;i<animations.length;i++){
        const arraygrids = document.getElementsByClassName('grids');

        setTimeout(async() =>{
            arraygrids[i].style.backgroundColor='yellow';
        }, i*300);
   
        if(animations[i].length==1){
            const [barstyle]=animations[i];
            setTimeout(() => {
                arraygrids[barstyle].style.backgroundColor='red';
            }, (i+1)*300);
        }
        else{
            const [barstyle,barnumber]=animations[i];
            setTimeout(() => {
                audio.play();
                arraygrids[barstyle].style.backgroundColor='green';
            }, (i+1)*300);
        }
    }

}


function binarySearch(){
array.sort((a,b)=> a-b);
const mainarraygrids = document.getElementsByClassName('grids');
for(let i=0;i<30;i++){
    mainarraygrids[i].innerHTML=`${array[i]}`;
  mainarraygrids[i].style.height=`${array[i]*5+3}px`;
  mainarraygrids[i].style.backgroundColor='#7f38ff';
} 
let animations=getBinaryAnimation(0,array.length-1,array,getnumber.value,[]);
for(let i=0;i<animations.length;i++){
    const arraygrids = document.getElementsByClassName('grids');
    setTimeout(async() =>{
        arraygrids[animations[i]].style.backgroundColor='yellow';
    }, i*500);
    if(i!=animations.length-1){
        setTimeout(() => {
            arraygrids[animations[i]].style.backgroundColor='red';
        }, (i+1)*500);
    }
    else if(arraygrids[animations[i]].innerHTML==getnumber.value){
        setTimeout(() => {
            audio.play();
            arraygrids[animations[i]].style.backgroundColor='green';
        }, (i+1)*500);
    }
    else{
        setTimeout(() => {
            arraygrids[animations[i]].style.backgroundColor='red';
        }, (i+1)*500);
    }
}
}