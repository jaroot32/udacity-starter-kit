const fetch = require("node-fetch");

const poster = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {

            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data),
    });

    try {

        const newData = await response.json();
        console.log(newData)
        return newData;

    } catch (error) {

        console.log('error', error);

    }
};

export { poster }