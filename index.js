var socket = io();
var mic;
var counter;

function setup () {
    mic = new p5.AudioIn();
    mic.start();
    createCanvas(400,400);
    counter = 20;
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
    
    if (vol > .13 && counter < 100) {
        counter ++;
        setBrightness();
    }
    else if (vol > .13 && counter === 100) {
        counter = 20;
    }
    else {
        counter = 20;
    }
    // console.log("counter");
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