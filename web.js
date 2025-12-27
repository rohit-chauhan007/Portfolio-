

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


const miniCircle=document.querySelector(".circle");
console.log(miniCircle)


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
 //skey circle 
 

 function circleSkew(){
 const  xsacle=1;
 const yscale=1;
 const xprev=0;
 const yprev=0;
 
   window.addEventListener("touchmove",function(move){
     const skew=move.touches[0]
    if(skew.clientX==10){
    let   xscale=0;
    }
console.log("X=","y=",skew.clientY)


   })
 }
 

//move circle with touch for mobile//
function circleMove(){
  window.addEventListener("touchmove",function(data){
    const move=data.touches[0]
     miniCircle.style.transform=`translate(${move.clientX}px,${move.clientY}px)`;
  });
}
firstAn()
circleMove()
circleSkew()

//move circle with mouse for windows//
  function  mouseFollower(){
    window.addEventListener("mousemoves",function(dets){
      miniCircle.style.transform=`translate(${dets.clientX}px,${clientY}px)`;
      
    });
  
  };
  mouseFollower()

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