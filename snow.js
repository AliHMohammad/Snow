let yPos = 0;

function move() {
    document.querySelector(".snowflake").style.top = yPos + "px";
    yPos++;

    requestAnimationFrame(move);
}

move();
