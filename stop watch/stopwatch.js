const h1=document.querySelector("h1");
const themeToggle = document.getElementById("themeToggle");

let [hrs,mins,secs] =[0,0,0];
let timer=null;

function stopwatch(){
    secs++
    if(secs==60){
        mins++
        secs=0;
    if(mins==60){
        hrs++
        mins=0;
    }
    }
    let hour=hrs<10? "0"+hrs:hrs;
    let minute=mins<10? "0"+mins:mins;
    let second=secs<10? "0"+secs:secs;
    h1.innerHTML=hour+":"+minute+":"+second;
}

function starts(){
    if(timer!== null) return;
    timer=setInterval(stopwatch,1000);
}

function stops(){
    clearInterval(timer);
    timer=null;
}

function reset(){
    clearInterval(timer);
    timer=null;
    [hrs,mins,secs] =[0,0,0];
    h1.innerHTML="00:00:00";
}


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
