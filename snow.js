let yPos = [];
let xPos = [];
let speed = [];

//Array af objekter
let flakes = document.querySelectorAll(".snowflake");

init();

function init() {

  for (let i = 0; i < flakes.length; i++) {
    //Vi initierer reset(i) for at bestemme yPos, speed, scale af objekt OG ny værdi af xPos, Så den dukker et nyt sted op fra x-position.
    reset(i);
  }

  //Starts moving snowflakes:
  move();
}

function reset(i) {
  //Width af hjemmeside
  let maxWidth = document.querySelector("#nightsky").clientWidth;
  
  //Vi bestemmer random værdi af x-værdi af objekt vha. maxWidth
  xPos[i] = Math.random() * maxWidth;

  //Initering / ressetning af i position bestemmes med Math.random.
  //Minus så den starter udenfor browseren.
  yPos[i] = Math.random() * -1000;
  //Initering / ressetning af hastigheden for speed[i].
  speed[i] = Math.random() * 1 + 0.6;

  //Initering / resettning af størrelsen af objektet
  flakes[i].style.transform = "scale(" + Math.random() + ")";
}

function move() {
  //browser-højde
  let maxHeight = document.querySelector("#nightsky").clientHeight;

  for (let i = 0; i < flakes.length; i++) {
    //Bevægelse
    flakes[i].style.top = yPos[i] + "px";
    flakes[i].style.left = xPos[i] + "px";

    //Nuværende y-position adderes med objektets hastighed.
    yPos[i] += speed[i];

    //hvis y-position større end browser-højde, reset index "i" for den enkelte array
    if (yPos[i] > maxHeight) {
      reset(i);
    }
  }

  //Kør move() igen med et kort delay
  requestAnimationFrame(move);
}
