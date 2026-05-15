// COUNTER
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

  const updateCounter=()=>{

    const target=+counter.getAttribute("data-target");
    const count=+counter.innerText;

    const increment=target/100;

    if(count<target){
      counter.innerText=Math.ceil(count+increment);
      setTimeout(updateCounter,30);
    }
    else{
      counter.innerText=target;
    }

  };

  updateCounter();

});

 // LIVE CLOCK
const clock=document.getElementById("clock");

if(clock){

  function updateClock(){
    const now=new Date();
    clock.innerHTML=now.toLocaleTimeString();
  }

  setInterval(updateClock,1000);
}
