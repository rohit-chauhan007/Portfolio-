

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});




//animation nav
 function firstAn(){
   var tl=gsap.timeline();
   tl.from("#navbar",{
   y:'-10',
   opacity:'0',
   duration:2,
   ease:Expo.easeInOut
   })
   
   .to(".move-el",{
     y:0,
     ease:Expo.easeInOut,
     duration:1.4,
     delay:-1,
     stagger:.2,
   })
   .from("#herofooter",{
     y:-10,
     opacity:0,
     ease:Expo.easeInOut,
     duration:2,
     delay:-1,
   })
  
 }

firstAn();

function circleMove(){
  document.addEventListener("mousemove",(e)=>{
    let circletl=gsap.timeline();
  
  circletl.to(".circle",{
    x:e.clientX,
    y:e.clientY,
  })
  })
}
circleMove()
 


//end event//


//for time 

const time=document.querySelector(".time");
function startTime(){
 

const toDay=new Date();
let h = toDay.getHours()
let m=toDay.getMinutes()
let s=toDay.getSeconds()


//if(h%12){
   h=h%12;
  h=h?h:12;
  h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;
 time.innerText=`${h}:${m}`;



}
startTime()