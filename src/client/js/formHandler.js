function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value
    document.getElementById('url').value = "";
    let formResponse = Client.checkForName(formText);
    let validUrl = {};

    if (formResponse === "Invalid URL") {
        let error = document.getElementById("error");
        error.innerText = " " + formResponse + " Please enter a valid url.";
        return;
    } else {
        error.innerText = "";
        validUrl['url'] = formResponse;
    }

    return Client.poster('http://localhost:5000/url', validUrl).then(function () {
        Client.getter('http://localhost:5000/aylien').then(function(data) {
           
            let newEntries = Client.entries(data);
            
            Client.displayEntries(newEntries);

        });
    });
}

export { handleSubmit }