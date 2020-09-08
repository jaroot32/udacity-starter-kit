function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    document.getElementById('url').value = "";
    let formResponse = Client.checkForName(formText);
    let validUrl = {};
    console.log(validUrl);

    if (formResponse === "Invalid URL") {
        console.log("This url will not be sent to the server.")
        let error = document.getElementById("error");
        error.innerText = " " + formResponse + " Please enter a valid url.";
        return;
    } else {
        error.innerText = "";
        validUrl['url'] = formResponse;
    }

    Client.poster('http://localhost:8081/url', validUrl).then(function () {
        Client.getter('http://localhost:8081/aylien').then(function(data) {
           
            let newEntries = Client.entries(data);
            
            Client.displayEntries(newEntries);
        })
    });
}

export { handleSubmit }
