const timerWatch= document.querySelector('#chrono');
let timer= 60;

const timelaps = () =>
{

    timerWatch.innerText = timer;
    timer --;
    if (timer >= 0) {
        setTimeout(timelaps, 1000);
    }
} 
 export default timelaps