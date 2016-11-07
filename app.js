
var express = require('express');
var app = express(); //use the express.js framework to serve out html files(handle the request and respnce on the server)
var server = require('http').Server( app )// starts a server instace on a port
var io = require('socket.io')( server )// use a socket.io for real time connection aka wesockets

var rectCount = 0;

server.listen(3000,function(){// set up a server on port 3000, do a call back when it is started successfully
  console.log("server started on 3000");
})

app.use(express.static('public')) // server ou teverything that is in the public folder

// app.get('/', function(req, res){ // look at the root request using express.js (notice the 'app' at the beginning)
//   res.sendFile(__dirname + '/public/index.html')// after a request, respond aka 'res' with the file that we want to send back to the user, in this case the index.html
// })
//
// app.get('/projection', function(req, res){ // look at the /projection path and send back the projection.html file
//   res.sendFile(__dirname + '/public/projection.html')
// })


io.on('connection', function(socket){ // if socket.io sees a new connection, do something with them..
  console.log(socket.id);// prints out socket that connected (ie all users + the projection)

socket.on('refreshPage', function(data){ // look for any messages with 'addRectangle'
      console.log('refreshPage' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
      io.emit('projectionReset', data);

    })
socket.on('addColor', function(data){ // look for any messages with 'addRectangle'
          console.log('addColor' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
          io.emit('projectionColor', data);

  })
socket.on('swirlStart', function(data){ // look for any messages with 'addRectangle'
            console.log('swirlStart' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
            io.emit('projectionSwirl', data);

    })
socket.on('eyesStart', function(data){ // look for any messages with 'addRectangle'
              console.log('eyesStart' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
              io.emit('projectionEyes', data);

      })

socket.on('lipsStart', function(data){ // look for any messages with 'addRectangle'
                    console.log('lipsStart' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
                    io.emit('projectionLips', data);

            })
socket.on('layStart', function(data){ // look for any messages with 'addRectangle'
            console.log('layStart' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
            io.emit('projectionLay', data);

            })
socket.on('rockStart', function(data){ // look for any messages with 'addRectangle'
          console.log('rockStart' + data); // log out the data in the case that you get true, but you could use this to get arbitrary data you want, think position, color, etc
          io.emit('projectionRock', data);

                        })

})
