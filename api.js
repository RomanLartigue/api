const apiUrl = 'https://images-api.nasa.gov/search?q=';

// Function to fetch and display Pokémon data
async function getpicture() {
    const nasainput = document.getElementById('nasainput').value.toLowerCase(); // Get input value
    const nasacontainer = document.getElementById('nasacontainer');
    const errorMessage = document.getElementById('errorMessage');
    console.log(nasainput)
    // Clear previous data and errors
    nasacontainer.style.display = 'none';
    errorMessage.textContent = '';

    if (!nasainput) {
        errorMessage.textContent = 'Please enter a name of picture.';
        return;
    }

    try {
        // Fetch Pokémon data from PokéAPI
        const response = await fetch(`${apiUrl}${nasainput}`);
        console.log(response)
        if (!response.ok) {
            throw new Error('Image not found');
        }

        const data = await response.json();
        displaynasa(data); // Call function to display Pokémon details
    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

// Function to display Pokémon data
function displaynasa(data) {
    const pokemonImage = document.getElementById('nasaImage');
    console.log(pokemonImage)
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
}

//Parse Json collection --> Items --> link