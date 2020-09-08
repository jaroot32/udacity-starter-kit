function clearEntries() {
    
        let list_to_clear = document.getElementById("entryList");

        while (list_to_clear.firstChild) {
            list_to_clear.removeChild(list_to_clear.firstChild);
        }

}

export { clearEntries }