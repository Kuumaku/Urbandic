function dictionary() {
    const vocab = document.getElementById("vocab").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70171a4cb7msheeffd56ab8dade7p1f0c62jsn17352f54f92e',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    };

    function display(data) {
        const definition = data.list[0].definition;
        const example = data.list[0].example;
        document.getElementById("definition").innerHTML = "Definition: " + definition;
        document.getElementById("example").innerHTML = "Example:" + example;
        
    }
    
    fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + vocab, options)
        .then(response => response.json())
        .then(data => display(data))
        .catch(err => swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please try another word or check your typing error'
        }));
}