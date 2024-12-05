function send_message(event, inputId) {
    let msg = document.getElementById(inputId).value;
    let element = document.createElement("li");

    if ((msg !== "") && (event === null || event.key === "Enter")) {
        let text = document.createTextNode(msg);
        element.appendChild(text);
        let messageList = document.getElementById("chat-messages");
        messageList.appendChild(element);

/* நிறம், இடத்தை மாற்றுவதற்கு */
        if (inputId === "i1") {
            element.style.color = "blue"; 
            element.style.textAlign = "left"; 
        } else {
            element.style.color = "red"; 
            element.style.textAlign = "right"; 
        }

        document.getElementById(inputId).value = ""; 
    }
}