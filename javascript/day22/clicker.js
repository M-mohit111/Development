document.body.addEventListener('click',(event)=>{
    const circle = document.createElement('div')
    circle.className = "circle"
    circle.textContent = "Hi"
    document.body.appendChild(circle)
    const color = ["red","blue","yellow","wheat"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)]
    const x = event.clientX
    const y = event.clientY
    circle.style.left = `${x-25}px`
    circle.style.top = `${y-25}px`
    setTimeout(() => {
        circle.remove();
    }, 5000);
})