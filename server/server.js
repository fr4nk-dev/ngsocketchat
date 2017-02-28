var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('User connected...');
    socket.on('disconnect', () => {
        console.log('User disconnect');
    });

    socket.on('add-message', (message, username) => {
        io.emit('message', { type: 'new-message', text: message, username: username });
    });
})

http.listen(8000, () => {
    console.log("Running in port 8000");
})