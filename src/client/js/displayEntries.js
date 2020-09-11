function displayEntries(arr) {

        let list = document.getElementById("entryList");

        Client.clearEntries();
        
        for (let i = 0; i < arr.length; i++) {
            list.append(arr[i])
        }

}

export { displayEntries }