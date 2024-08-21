// URL da API The Dog API para buscar uma imagem aleatória
const apiURL = 'https://api.thedogapi.com/v1/images/search';

// Função para buscar uma imagem de cão
async function fetchDogImage() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const dogImageUrl = data[0].url;

        // Exibe a imagem no DOM
        document.getElementById('dog-image').innerHTML = `<img src="${dogImageUrl}" alt="Imagem de um cão">`;

    } catch (error) {
        console.error('Erro ao buscar a imagem de cão', error);
    }
}

// Chama a função ao carregar a página para exibir a primeira imagem
fetchDogImage();