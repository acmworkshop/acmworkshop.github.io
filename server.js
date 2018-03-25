const io = require('socket.io')();

io.on('connection', function (client) {
    client.on('subscribeToTimer', function (interval) {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(function () {
            client.emit('timer', new Date().getTime());
        }, interval);
    });

    //================================================================================
    /* added_content.txt for server.js goes here */
	//================================================================================

});

const port = 8005;
io.listen(port);
console.log('listening on port ', port);