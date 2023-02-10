let yPos = 0;

init();

function init() {
    let flakes = document.querySelectorAll(".snowflake");
    let px = 50

    for (let i = 0; i < flakes.length; i++) {
        flakes[i].style.left = px + "px"  
        px = px + 50;
    }
    
    //Starts moving snowflakes:
    move();
}


function reset() {
    yPos = -10;

}


function move() {
    let flakes = document.querySelectorAll(".snowflake");
    let max = document.querySelector("#nightsky").clientHeight;

    for (let i = 0; i < flakes.length; i++) {
        flakes[i].style.top = yPos + "px"
        
    }
    yPos++;
    
    if (yPos > max) {
        reset();
    }

    requestAnimationFrame(move);
}



