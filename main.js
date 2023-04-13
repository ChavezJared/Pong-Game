console.log('YERRRRRRR')
const canvas = document.getElementById('pongGame');
const context = canvas.getContext('2d');

function drawRect(x,y,w,h,color){
    context.fillStyle = color
    context.fillRect(x,y,w,h)
}
// Canvas
drawRect(0,0,400,600);

//Ai Paddle
const ai = {
    x:canvas.width/2 - 50/2,
    y: 10,
    width: 50,
    height:10,
    color: 'purple',
    score: 0
};

drawRect(ai.x,ai.y,ai.width,ai.height,ai.color);

//Player 1 paddle
const player1 = {
    x:canvas.width/2 - 50/2,
    y: canvas.height -10 -10,
    width: 50,
    height:10,
    color: 'purple',
    score: 0
};

drawRect(player1.x,player1.y,player1.width,player1.height,player1.color);

// Center of canvas
function centerLine(){
    context.beginPath()
    context.moveTo(0,canvas.height/2)
    context.lineTo(canvas.width,canvas.height/2)
    context.strokeStyle ="yellow";
    context.stroke()
}
centerLine()

// center circle
function drawCircle(x,y,r,color){
    context.fillStyle = color
    context.beginPath()
    context.arc(x,y,r,0,Math.PI*2,false)
    context.closePath()
    context.fill()
}
// Ball
const ball = {
    x:canvas.width/2,
    y:canvas.height/2,
    radius: 10,
    speed: 5,
    velocityX: 5,
    VelocityY:5,
    color: 'yellow'

}

drawCircle(ball.x,ball.y,ball.radius,ball.color);

// score
function drawText(text,x,y,color){
    context.fillStyle = color
    context.font ="26px Rubik Pixels"
    context.fillText(text,x,y)
}
drawText(ai.score,20,canvas.height/2-30)
drawText(player1.score,20,canvas.height/2 + 30)