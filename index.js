var socket = io();
var mic;
var startingBrightness;
var counter;
var countdown;
var isLit = false;
var r;
var g;
var b;

function setup () {
    mic = new p5.AudioIn();
    mic.start();
    createCanvas(400,400);
    startingBrightness = 10;
    counter = startingBrightness;
    triggerTurnOn();
    setBrightness();
}

function draw () { 
    micCheck();
    background(0);

    textSize(32);
    fill(255,0,0);
    text(counter, 50, 50);
}

function micCheck() {
    var vol = mic.getLevel();
    
    if (isLit === false) {
        if (vol > .13 && counter < 100) {
            counter ++;
            setBrightness();
        }
        else if (vol > .13 && counter === 100) {
            isLit = true;
            countdown = 1000;
        }
        else if (counter > startingBrightness + 1) {
            counter -= 0.25;
            setBrightness();
        }
    // console.log("counter");
    }
    else {
        if (countdown > 0){
            countdown -= 1;
        }
        else {
            setBrightness();
            isLit = false;
        }
    }
}


function mouseReleased() {
}

function triggerFlash () {

  }
  
function triggerTurnOn () {
    socket.emit('turn-on')
  }

function setBrightness () {
    socket.emit('set-brightness', counter)
}

function randomColor() {
    
}