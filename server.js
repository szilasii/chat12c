const Websocket = require('ws')

const server = new Websocket.Server({ port: 8001})
const clients = new Set()

server.on('connection',(socket)=>{
    console.log('valaki kapcsolodott')
    clients.add(socket)
    socket.on("message", (message) =>{
        broadcast(message,socket);
    })

})

function broadcast(message,sender) {

    for (const client of clients) {
        // if (client != sender)
            client.send(message)
    }

}
