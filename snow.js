let yPos = 0;

move();

function reset() {
    yPos = -10;

}

function move() {
    document.querySelector(".snowflake").style.top = yPos + "px";
    yPos++;

    let max = document.querySelector("#nightsky").clientHeight;

    if (yPos > max) {
        reset();
    }

    requestAnimationFrame(move);
}



