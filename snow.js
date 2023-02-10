let yPos = []

init();

function init() {
    let flakes = document.querySelectorAll(".snowflake");
    let px = 50

    for (let i = 0; i < flakes.length; i++) {
        flakes[i].style.left = px + "px";
        yPos[i] = Math.random() * 100;
        px = px + 50;
    }
    
    //Starts moving snowflakes:
    move();
}


function reset(i) {
    yPos[i] = Math.random() * -50;

}


function move() {
    let flakes = document.querySelectorAll(".snowflake");
    let max = document.querySelector("#nightsky").clientHeight;

    for (let i = 0; i < flakes.length; i++) {
        flakes[i].style.top = yPos[i] + "px"

        yPos[i]++;
        
        if (yPos[i] > max) {
            reset(i);
        }
        
    }

    requestAnimationFrame(move);
}



