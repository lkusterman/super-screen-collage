var socket = io.connect('http://192.168.1.9:3000') // set up a place for us to connect to, and try to connect.

socket.on('connect', function(data) { // when we are connected to something
    console.log("connected to the server" + socket.id); // log out our socket's id, some log garbled out number letter thing that is unique!
})

socket.on('projectionSwirl', function(swirly) { // if we set a projectionRectangle message then do something
  console.log(swirly);
    var currentPosition = $('#background').offset()
    var top = currentPosition.top
    var left = currentPosition.left
    console.log(top + ',' + left);

    $('<img src="/assets/swirl.gif">').css({
  'position' :'absolute',
  'top' : top,
  'left' :  left,
  'height': '100vh'

}).appendTo('body');
   })

socket.on('projectionReset', function(data) { // if we set a projectionRectangle message then do something
    console.log(data);
      location.reload(true);

})

socket.on('projectionColor', function(data) { // if we set a projectionRectangle message then do something
    console.log(data);
    var currentPosition = $('#background').offset()
    var top = currentPosition.top
    var left = currentPosition.left
    console.log(top + ',' + left);

    $('<img src="/assets/bw.gif">').css({
  'position' :'absolute',
  'top' : top,
  'left' :  left,
  'height': '100vh'

}).appendTo('body');
console.log(data);
   })

socket.on('projectionEyes', function(data) { // if we set a projectionRectangle message then do something
       console.log(data);
       var currentPosition = $('#background').offset()
       var top = currentPosition.top
       var left = currentPosition.left
       console.log(top + ',' + left);

       $('<img src="/assets/eye.gif">').css({
     'position' :'absolute',
     'top' : top,
     'left' :  left,
     'height': '100vh'

   }).appendTo('body');
   console.log(data);
      })

socket.on('projectionLips', function(data) { // if we set a projectionRectangle message then do something
             console.log(data);
             var currentPosition = $('#background').offset()
             var top = currentPosition.top
             var left = currentPosition.left
             console.log(top + ',' + left);

             $('<img src="/assets/lips.gif">').css({
           'position' :'absolute',
           'top' : top,
           'left' :  left,
           'height': '100vh'

         }).appendTo('body');
         console.log(data);
            })
socket.on('projectionRock', function(data) { // if we set a projectionRectangle message then do something
                         console.log(data);
                         var currentPosition = $('#background').offset()
                         var top = currentPosition.top
                         var left = currentPosition.left
                         console.log(top + ',' + left);

                         $('<img src="/assets/rocks.gif">').css({
                       'position' :'absolute',
                       'top' : top,
                       'left' :  left,
                       'height': '100vh'

                     }).appendTo('body');
                     console.log(data);
                        })
socket.on('projectionLay', function(data) { // if we set a projectionRectangle message then do something
      console.log(data);

                         var currentPosition = $('#background').offset()
                         var top = currentPosition.top
                         var left = currentPosition.left
                         console.log(top + ',' + left);

                         $('<img src="/assets/laydown.gif">').css({
                       'position' :'absolute',
                       'top' : top,
                       'left' :  left,
                       'height': '100vh'

                     }).appendTo('body');
                     console.log(data);
                        })
