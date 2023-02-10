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

        //Initiering af top position af objektet med Math.random()
        yPos[i] = Math.random() * 100;
        
        //Initering af objekt hastighed med Math.random()
        speed[i] = Math.random() * 10;
    }
    
    //Starts moving snowflakes:
    move();
}


function reset(i) {
    //i position bestemmes med Math.random. Minus så den starter udenfor browseren.
    yPos[i] = Math.random() * -50;
    //Hastigheden for speed[i] resettes med en ny.
    speed[i] = Math.random() * 10;

    //Resetter størrelsen af objektet
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



