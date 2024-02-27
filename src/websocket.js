const socket = new WebSocket('ws://10.3.0.14:8001')
    const message = [];

// ha uzenet érkezik, akkor a chat elemben egy uj paragrafus kerül beszúrásra és itt jelenik meg a böngészőben az új üzenet
socket.addEventListener("message", (event) => {
    const chat = document.getElementById('chat');
    const message = document.createElement('p')
    const blobAdat = event.data
    blobAdat.text().then((text) => {
        message.textContent = text;
    }) 
    chat.appendChild(message)
})

// socket.addEventListener("error", () => {
// console.log("hiba van!");

// })

// socket.addEventListener("close", () => {
//     console.log("A kapcsolat bezárodott!");
    
//     })

// socket.addEventListener("open", () => {
//     console.log("Létrejött a kapcsolat!");
        
//     })    

