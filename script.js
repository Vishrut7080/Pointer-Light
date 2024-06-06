const seeThrough = document.getElementById("see-through");

document.addEventListener('mousemove', (e) => {
    const posX = e.x
    const posY = e.y
    console.log(posX, posY)
    seeThrough.style.left = `${posX}px`;
    seeThrough.style.top = `${posY}px`;
})