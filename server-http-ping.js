const HueApi = require('node-hue-api').HueApi;

const http = require('http')

http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/plain')
  res.setHeader('access-control-allow-origin', '*')
  res.end('message')

  if (req.url === '/flash') {
    return doFlash()
  }
  if (req.url === '/turn-on') {
    return doTurnOn()
  }
}).listen(12000, function (err) {
  if (err) throw err
  console.log('http://localhost:12000')
})

function doFlash () {
  console.log('flashing stuff in theory')
}

function doTurnOn () {
  console.log('turning on stuff in theory')
  api.setLightState(2, state.on())
    .then(displayResult)
    .fail(displayError)
    .done();
}

