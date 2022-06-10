
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
            return document.getElementById('joke').innerHTML = jsonResponse.joke
        }
        throw new Error('Request failed!')

    } catch(error) {
        console.log(error)
    }

};

getData()

