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
            const { joke } = jsonResponse
            return document.getElementById('joke').innerHTML = joke
        }
        throw new Error('Request failed!')

    } catch(error) {
        console.log(error)
    }
};

const generateJoke = document.getElementById('button');
generateJoke.addEventListener("click", getData);

