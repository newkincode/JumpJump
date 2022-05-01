var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext("2d");

var playerY = 300;

ctx.fillText("Hello World",20,20);

function jump(){
    ctx.strokeRect(10,playerY,100,100);
    window.requestAnimationFrame(jump);
}

window.onkeydown = (e) => playerY-=10;

window.requestAnimationFrame(jump);


document.title = "JumpJump" ;