const express = require('express')
const app = express() //routing software
const port = 3000
const bodyParser = require('body-parser') //helps you inspect the requests
var plotly = require('plotly')('emerson.cloud', '1GSuZcvZmOXQlDE8EMwI');
logger = require('morgan');
socketio = require('socket.io');

const client = require('twilio')(
  'AC4c96337379b6d1fe6dbf7570fed8f674',
  'ccf83c3e840443d2d62d9e8a3b253e2f'
);

console.log(client);



// const server = app.listen(3000, () => console.log('App listenin on port ' + port));

// const websocket = socketio(server);

// websocket.on('channel1', (data) => {
//   console.log('Greetings from RN app', data);
// });

// websocket.emit('channel2', 'new channel');
// websocket.on('channel2', (obj) => {
//   console.log('Object from RN app', obj);
// });

app.use(bodyParser.json());
app.use(bodyParser({limit: '50mb'}));
// var data = [{x:[0,1,2], y:[1,3,2], type: 'scatter'}];
// var layout = {fileopt : "overwrite", filename : "simple-node-example"};

// // plotly.plot(data, layout, function (err, msg) {
// // 	if (err) return console.log(err);
// // 	console.log(msg);
// // });

app.get('/', (req, res) => {
  res.send('SteveSendAPostRequestTo/Data!');
});

app.post('/data', (req, res) => { //when steve sends a post request with data it will live int eh body 
  // console.log(req.body.accelerometerData);
  // console.log(req.body.velocity);
  console.log(req.body.accdata); 


  res.send({
    "key": "password",
  });
});

function callEmergencyServices() {
  client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: '+13518881876',
      from: '+13309071200',
    }).then((call) => {
      console.log("eheres the call", call);
    }).catch((error) => {
      console.log('heres the error', error)
    });
}

app.post('/alert', (req, res) => { //callback to this, par of req and res and twilio is body. response.sedn adn message

  'https://www.google.com/maps/place/41.147306,-81.347000'
  console.log(req.body);

  mapsUrl = 'https://www.google.com/maps/place/'+ req.body.location.coords.latitude + ',' +
            req.body.location.coords.longitude;

  client.messages.create({
    from: '+13518881876',
    to: '+13309071200',
    body: 'ALERT! Matt may have been in an accident! We recommend calling him now.' +
          ' Here is the location of the accident: ' + mapsUrl
  }).then((message) => {
    console.log("here is the message");
    console.log(message.sid);
  }).catch((error) => {
    console.log("here is the error");
    console.log(error);
  });

  setTimeout(callEmergencyServices, 1500, 'funky')

  res.send('sent')

})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))