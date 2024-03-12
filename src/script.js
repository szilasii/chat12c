function sendMessage() {
    const messageInput = document.getElementById("message")
    const message = messageInput.value;
    socket.send(document.getElementById("sender").value + ": " + message)
    messageInput.value = '';
}


async function authFetch(url="", data = {}) {
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data))
    })
    return response.json();
};


function login(event,data) {
    

    userData = authFetch("http://localhost:8000/api/login",data);
    console.log('userData:', userData);
    return false;
}