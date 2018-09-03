const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Phillips Hue
const hue = require('node-hue-api')
const HueApi = hue.HueApi;
var lightState = hue.lightState;

var displayResult = function(result) {
    console.log(result);
}

var displayError = function(err) {
    console.log(result);
}

var config = require('./config.js');
const api = new HueApi(config.host, config.username);
var state = lightState.create();

app.use(express.static(__dirname));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('turn-on', function (){
        console.log('turn light on'); 
    });
    socket.on('set-brightness', function (brightness){
        console.log(brightness);
    });
  });

api.setLightState(config.id, state.on(), function(err, result) {
	if (err) throw err;
	displayResult(result);
});
