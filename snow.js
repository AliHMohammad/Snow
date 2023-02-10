let yPos = []
let speed = [];

//Array af objekter
let flakes = document.querySelectorAll(".snowflake");

init();

function init() {
    let px = 25
    for (let i = 0; i < flakes.length; i++) {
        //Initiering af venstre position af objektet. Px inkrimineres med 50 hvert loop
        flakes[i].style.left = px + "px";
        px += 50;
        //Vi initierer reset(i) for at bestemme yPos, speed, og scale af objekt
        reset(i);
    }
    
    //Starts moving snowflakes:
    move();
}


function reset(i) {
    //Initering /ressetning af i position bestemmes med Math.random.
    //Minus så den starter udenfor browseren.
    yPos[i] = Math.random() * -50;
    //Initering / ressetning af hastigheden for speed[i].
    speed[i] = (Math.random() * 5) + 1;

    //Initering / resettning af størrelsen af objektet
    flakes[i].style.transform = "scale(" + Math.random() + ")";


}


function move() {
    //browser-højde
    let max = document.querySelector("#nightsky").clientHeight;

    for (let i = 0; i < flakes.length; i++) {
      //Bevægelse
      flakes[i].style.top = yPos[i] + "px";
      

      //Nuværende y-position adderes med objektets hastighed.
      yPos[i] += speed[i];

      //hvis y-position større end browser-højde, reset index "i" for den enkelte array
      if (yPos[i] > max) {
        reset(i);
      }
    }

    //Kør move() igen med et kort delay
    requestAnimationFrame(move);
}



