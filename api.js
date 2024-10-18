const apiUrl = 'https://images-api.nasa.gov/search?q=';

// Function to fetch and display Pokémon data
async function getpicture() {
    const nasacontainer = document.getElementById('nasacontainer');
    const errorMessage = document.getElementById('errorMessage');
    const nasainput = document.getElementById('nasainput').value;
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
        if (!response.ok) {
            throw new Error('Image not found');
        }

        const data = await response.json();
        console.log(data[0].collection)
        displaynasa(data); // Call function to display Pokémon details


    } catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

// Function to display Pokémon data
function displaynasa(data) {
    const nasaImage = document.getElementById('nasaImage');
    const nasacontainer = document.getElementById('nasacontainer');
    
        nasaImage.src = ''; 
        nasacontainer.style.display = 'none'; 
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'No images found for this search.';
    }
// https://developer.duda.co/docs/collections-api
// https://www.w3schools.com/tags/att_a_href.asp
// https://www.w3schools.com/js/js_api_intro.asp
//https://youtu.be/37vxWr0WgQk?si=FNM2fMGR_0frXsp5
//https://youtu.be/VaDUGPMjzOM?si=HCoezaSyn9QG8qZf
//https://www.w3schools.com/python/ref_dictionary_items.asp
//https://stackoverflow.com/questions/300522/count-vs-length-vs-size-in-a-collection

//Parse Json collection --> Items --> link