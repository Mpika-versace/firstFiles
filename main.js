const button=document.querySelector("#color");
const header=document.querySelector("header");
const cover=document.querySelector(".cover");
const hide=document.querySelector(".hide");
let x=0;
function animate(){
    button.classList.toggle('animate');
}


button.addEventListener('click',animate);
cover.addEventListener("click",()=>{
    let sec=new Date().getSeconds();
    let moduloSec=sec%10;
    console.log(moduloSec);
    console.log(sec);
    hide.style.transitionDelay=`${moduloSec}s`
    hide.classList.toggle("compte");
});