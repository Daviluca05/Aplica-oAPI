const apiURL = 'https://api.thedogapi.com/v1/images/search';

async function fetchDogImage() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const dogImageUrl = data[0].url;

        document.getElementById('dog-image').innerHTML = `<img src="${dogImageUrl}" alt="Imagem de um cão">`;

    } catch (error) {
        console.error('Erro ao buscar a imagem de cão', error);
    }
}

fetchDogImage();
