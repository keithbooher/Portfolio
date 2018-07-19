var canvas = document.getElementById("myCanvas");

canvas.height = 400;
canvas.width = window.innerWidth;
canvasHeight = canvas.height;
canvasWidth = canvas.width

// console.log(canvasHeight)

var c = canvas.getContext('2d');

var dy = 1;

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 30;
var minRadius = 2;

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(`Height: ${canvas.height}
    Width: ${canvas.width}`)
})

window.addEventListener('resize', function(event){
    canvasHeight = canvas.height;
    canvasWidth = canvas.width
})

function Circle(xCoord,yCoord,radius) {

    var randomNum = Math.floor(Math.random*2);
    this.x = xCoord
    this.y = yCoord
    this.radius = radius

    this.update = function(){
        //the current circles y position 
        this.y += -dy
        //if the current circle makes it to the top, we put it back at the bottom
        if(this.y < 0){
            this.y = 420
        }

        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y >-50) {
            if (this.radius < maxRadius) {
            this.radius += 1
            }
        } else if (this.radius > 2) {
            this.radius -= 1
        }

        this.draw()
    }
    //drawing circle
    this.draw = function() {
        c.beginPath()
        c.arc(
            this.x,
            this.y,
            this.radius,
            Math.PI *2,
            false
        )
        c.fillStyle = "rgb(140,67,255)"
        c.fill()
    }
   
}


var circleArr = []
//for loop to make all the circles
for (var index = 0; index < 100; index++) {
    var randomX = Math.random() * canvasWidth;
    var randomY = Math.floor(Math.random() * 420) + 420  
    
    var newCircle = new Circle(randomX,randomY,2);

    circleArr.push(newCircle)
}

// console.log(circleArr[0])


//canvas native functions to make it animate
function animate(){

    //clear canvas
    c.clearRect(0, 0, canvasWidth, canvasHeight)
    // console.log('action')

    //animate function is now using all 100 circles that were made, and then 
    //runs update to check on where their position is. Afterwards the draw function 
    //is called which then draws the circle
    for (let index = 0; index < circleArr.length; index++) {
        circleArr[index].update();  
    }

    requestAnimationFrame(animate);
    

    
}
animate();
