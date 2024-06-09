const shadow = document.getElementById("shadow");

document.addEventListener('mousemove', (e) => {
    const posX = e.x
    const posY = e.y
    // console.log(posX, posY)
    shadow.style.left = `${posX}px`;
    shadow.style.top = `${posY}px`;
})