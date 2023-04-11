console.log('YERRRRRRR')
const canvas = document.getElementById('pongGame');
const context = canvas.getContext('2d');

function drawRect(x,y,w,h,color){
    context.fillStyle = color
    context.fillRect(x,y,w,h)
}
// Canvas
drawRect(0,0,450,600);

//Paddle
const com = {
    x:canvas.width/2 - 50/2
}
