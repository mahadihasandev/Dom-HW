let red=document.querySelector(".red");
let green=document.querySelector(".green");
let blue=document.querySelector(".blue");
let Black=document.querySelector(".Black");
let Aqua=document.querySelector(".Aqua");
let Aquamarine=document.querySelector(".Aquamarine");
let Brown=document.querySelector(".Brown");

let display=document.querySelector(".box")

red.addEventListener("click",()=>{
    display.style.color="red";
    display.style.fontSize="50px"
    display.innerHTML="Red"
});

green.addEventListener("click",()=>{
    display.style.color="green";
    display.style.fontSize="50px"
    display.innerHTML="Green"
});

blue.addEventListener("click",()=>{
    display.style.color="blue";
    display.style.fontSize="50px"
    display.innerHTML="Blue"
});

Black.addEventListener("click",()=>{
    display.style.color="Black";
    display.style.fontSize="50px"
    display.innerHTML="Black"
});

Aqua.addEventListener("click",()=>{
    display.style.color="Aqua";
    display.style.fontSize="50px"
    display.innerHTML="Aqua"
});

Aquamarine.addEventListener("click",()=>{
    display.style.color="Aquamarine";
    display.style.fontSize="50px"
    display.innerHTML="Aquamarine"
});

Brown.addEventListener("click",()=>{
    display.style.color="Brown";
    display.style.fontSize="50px"
    display.innerHTML="Brown"
});
