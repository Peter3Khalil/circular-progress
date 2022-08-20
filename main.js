let circular_progress = document.querySelector('.circular-progress');
let circular_value = document.querySelector('.circular-value');

let start = 0,end = 50,speed = 10;

let progress = setInterval(()=>{
    if(start===end){
        clearInterval();
    }else{
        circular_progress.style.background = `conic-gradient(#09090a ${++start*3.6}deg , #cbcbe8 0deg)`;
        circular_value.innerHTML = start+ '%';
    }
    
},speed)

