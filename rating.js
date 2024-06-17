// Rating by stars
function createStars(rating) {
    const starsContainer = document.querySelector('.stars-container');
    starsContainer.innerHTML = ''; // Clean the existing content

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = i <= rating ? 'fa-solid fa-star' : 'fa-regular fa-star'; 
        starsContainer.appendChild(star);
    }
}

// Sample
const rating = 5;
createStars(rating);
