const hue = require("node-hue-api");
const HueApi = hue.HueApi;
var lightState = hue.lightState;

var config = require("./config.js");
var api = new HueApi(config.host, config.username);
state = lightState.create();

var userDescription;

var displayResult = function(result) {
    console.log(result);
};

var displayUserResult = function(result) {
    console.log("Created user: " + JSON.stringify(result));
};

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var displayError = function(err) {
    console.log(err);
};

// --------------------------
// Function for locating bridges on a network
// var displayBridges = function(bridge) {
// 	console.log("Hue Bridges Found: " + JSON.stringify(bridge));
// };

// // --------------------------
// // Using a callback to locate bridges
// hue.nupnpSearch(function(err, result) {
// 	if (err) throw err;
// 	displayBridges(result);
// });

// --------------------------
// Using a callback (with default description and auto generated username)
// hue.createUser(config.host, function(err, user) {
// 	if (err) throw err;
// 	displayUserResult(user);
// });

// // or alias fullState()
// api.fullState(function(err, config) {
//     if (err) throw err;
//     displayResult(config);
// });

// Finding the Lights Attached to the Bridge
// --------------------------
// Using a callback
// api.lights(function(err, lights) {
//     if (err) throw err;
//     displayResult(lights);
// });

// Testing turning Lights on
// --------------------------
// Using a callback
// Set the lamp with id '2' to on
api.setLightState(config.id, state.on(), function(err, result) {
	if (err) throw err;
	displayResult(result);
});