function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
        canvas,
        canvasContext : canvas.getContext("2d"),
        numberOfSnowballs : 250 
    }
}

function random(min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function createSnowballs(canvas,numberOfSnowballs) {
    return [...Array(numberOfSnowballs)].map(() => {
        return {
            x : random(0,canvas.width),
            y : random(0,canvas.height),
            opacity : random(0.5, 1),
            radius : random(2,4),
            speedX : random(-5,5),
            speedY : random(1,3)
        }
    })
    // console.log(x)
}

function drawSnowballs(canvasContext, snowballs){
    canvasContext.beginPath();
    canvasContext.arc(snowballs.x,snowballs.y,snowballs.radius,0,Math.PI*2);
    canvasContext.fillStyle = `rgba(255,255,255,${snowballs.opacity})`;
    canvasContext.fill();
}

function moveSnowballs(canvas, snowballs) {
    snowballs.x += snowballs.speedX;
    snowballs.y += snowballs.speedY;

    if (snowballs.x > canvas.width){
        snowballs.x = 0 ;
    } else if (snowballs.x < 0) {
        snowballs.x = canvas.width ;
    }

    if (snowballs.y > canvas.height){
        snowballs.y = 0 ;
    }
}

function run() {
    const {canvas,canvasContext,numberOfSnowballs} = setup();
    const snowballs = createSnowballs(canvas,numberOfSnowballs)
    // snowballs.forEach((snowballs) => drawSnowballs(canvasContext, snowballs))

    setInterval(() => {
        canvasContext.clearRect(0,0,canvas.width,canvas.height)
        snowballs.forEach((snowballs) => drawSnowballs(canvasContext, snowballs));
        snowballs.forEach((snowballs) => moveSnowballs(canvas,snowballs));
    },50 )
}
run();