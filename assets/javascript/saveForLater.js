var canvas = document.getElementById("myCanvas");

canvas.height = 400;
canvas.width = window.innerWidth;
canvasHeight = canvas.height;
canvasWidth = canvas.width

var c = canvas.getContext('2d');

// var y = -420;
// var randomX = Math.random() * canvasWidth;
// var dx = 1;


// function Circle(xCoord,yCoord,radius) {

//     var randomNum = Math.floor(Math.random*2);
//     this.x = xCoord
//     this.y = yCoord
//     this.radius = radius

//     this.update = function(){
//         this.y += this.dy
//         if(this.y > canvasHeight){
//             console.log('hit the top!')
//         }
//         this.draw()
//     }
//     this.draw = function() {
//         c.beginPath()
//         c.arc(
//             this.x,
//             this.y,
//             this.radius,
//             Math.PI *2,
//             false
//         )
//         c.fillStyle = "rgb(140,67,255)"
//         c.fill()
//     }
   
// }


// var circleArr = []
// for (var index = 0; index < 100; index++) {
//     var randomX = Math.random() * canvasWidth;

//     circleArr.push(
//         new Circle(randomX,-y,10)
//     )
// }




var y = -420;
var randomX = Math.random() * canvasWidth;
var dy = 1;


function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    console.log('action')


    c.beginPath();
    c.arc(randomX,-y,10,Math.PI * 2,false);
    c.stroke();

    if (y > canvas.height) {
        animate();
    }

    y += dy;
}
animate();
