const shadow = document.getElementById("shadow");

document.addEventListener('mousemove', (e) => {
    const posX = e.x
    const posY = e.y
    // console.log(posX, posY)
    shadow.style.left = `${posX}px`;
    shadow.style.top = `${posY}px`;
})


let startTime = null; // The start time of the animation
const transparentStart = 65; // The initial value of the --transparent CSS variable
const shadowsStart = 75; // The initial value of the --shadows CSS variable

/**
 * The animation function
 * @param {number} timestamp The current timestamp
 */
function step(timestamp) {
    // Set the start time if it's not set
    if (startTime === null) {
        startTime = timestamp;
    }
    // Calculate the progress of the animation
    const progress = timestamp - startTime;

    // Calculate the current values of the CSS variables
    const cycle = Math.sin(progress / 350) + (Math.cos(progress / 450)); // Adjust the denominator to change the speed of the heartbeat animation
    const transparent = transparentStart * (1 + 0.15 * cycle);
    const shadows = shadowsStart * (1 + 0.15 * cycle);

    // Update the CSS variables
    shadow.style.setProperty('--transparent', `${transparent}dvh`);
    shadow.style.setProperty('--shadows', `${shadows}dvh`);

    // Request the next frame by recursively calling the step function
    requestAnimationFrame(step);
}

// Start the animation by requesting the first frame
requestAnimationFrame(step);

document.addEventListener("keypress", (evt) => {
    if (evt.key == "`") {
        console.log("click");
        shadow.style.display = shadow.style.display == "none" ? "block" : "none";
    }
})