// console.log('yo');
var socket = io.connect('http://192.168.1.9:3000') // connect to the server

socket.on('connect', function(data) { // when we connect, do something
    console.log("connected to the server" + socket.id); // log out our id
})


  // $('#swirl').click(function() { // on click do something
  //         console.log('click');
  //
  //
  //     socket.emit('swirlStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
  // })

$('#swirl').click(function(e){ // on click do something
  console.log(e);
  socket.emit('swirlStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})

$('#eyes').click(function() { // on click do something
        console.log('click');

    socket.emit('eyesStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})

$('#lips').click(function() { // on click do something
        console.log('click');

    socket.emit('lipsStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})

$('#refresh').click(function(){ // on click do something
        console.log('click');

    socket.emit('refreshPage', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})

$('#coloring').click(function(){ // on click do something
        console.log('click');

    socket.emit('addColor', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})
$('#lay').click(function(){ // on click do something
        console.log('click');

    socket.emit('layStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})

$('#rock').click(function(){ // on click do something
        console.log('click');

    socket.emit('layStart', true) // send out a message of addRectagnle to the server, it will handle the details (party planning)!
})
