function sendMessage() {
    const messageInput = document.getElementById("message")
    const message = messageInput.value;
    socket.send(document.getElementById("sender").value + ": " + message)
    messageInput.value = '';
}