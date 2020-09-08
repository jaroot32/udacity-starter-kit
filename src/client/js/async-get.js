const getter = async (url = '') => {

    const request = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {

            'Content-Type': 'application/json',

        }
    });

    try {

        const newList = await request.json();

        // console.log(newList)
        
        // let newEntries = Client.entries(newList);
        
        // Client.displayEntries(newEntries);

        return newList;


    } catch (error) {

        console.log('error', error);

    }
    
};

export { getter }