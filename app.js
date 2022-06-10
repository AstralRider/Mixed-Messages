
const getData = async () => {
    const options = { 
        method: 'GET',
        headers: {
          "Accept" : "application/json" 
        }
      };

    try {
        const response = await fetch('https://icanhazdadjoke.com/', options)
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        }
        throw new Error('Request failed!')

    } catch(error) {
        console.log(error)
    }

};

getData()