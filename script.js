const episodes = [
    { id: 1, name: 'Solo Leveling', episode: 'S1:EP1', duration: '24min' },
    { id: 2, name: 'Solo Leveling', episode: 'S1:EP2', duration: '24min' },
    { id: 3, name: 'Solo Leveling', episode: 'S1:EP3', duration: '24min' },
    { id: 4, name: 'Solo Leveling', episode: 'S1:EP4', duration: '24min' },
    { id: 5, name: 'Solo Leveling', episode: 'S1:EP5', duration: '24min' },
    { id: 6, name: 'Solo Leveling', episode: 'S1:EP6', duration: '24min' }
];

const episodesList = document.getElementById('episodes-list');

episodes.forEach(episode => {
    const cardEpisode = document.createElement('div');
    cardEpisode.className = 'card-episode';
    cardEpisode.innerHTML = `
                            <span class="episode-span">${episode.name}</span>
                            <span class="episode-span">${episode.episode}</span>
                            <span class="episode-span">${episode.duration}</span>
                            <i class="fa-regular fa-circle-play" onclick="watchEpisode(${episode.id})"></i>
                            `;
    episodesList.appendChild(cardEpisode);
})

function watchEpisode(id) {
    console.log('Clicked to watch the episode', id);
}

watchEpisode();


// Dinamic Carrossel

let currentIndex = 0;
const cards = document.querySelectorAll('.card-episode');
const visibleCards = 3;
const prevButton = document.getElementById('larrow');
const nextButton = document.getElementById('rarrow');

function updateCarousel() {
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards) {
            card.classList.add('visible');
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
            card.classList.remove('visible');
        }
    });
    applyGradientToLastVisible();
    updateButtons();
}

function applyGradientToLastVisible() {
    cards.forEach((card, index) => {
        if (index === currentIndex + visibleCards - 1 && card.classList.contains('visible')) {
            card.classList.add('gradient');
        } else {
            card.classList.remove('gradient');
        }
    });
}

function updateButtons() {
    prevButton.classList.toggle('disabled', currentIndex === 0);
}

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    });

updateCarousel();