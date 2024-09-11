// Get the starry sky container
const starrySky = document.querySelector('.starry-sky');

// Function to generate a star
function createStar() {
    // Create a new div for the star
    const star = document.createElement('div');
    star.classList.add('star');

    // Set random size for the star (between 1px and 3px)
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Set random position within the starry sky (top half of the screen)
    const posX = Math.random() * 100;  // Between 0% and 100% of width
    const posY = Math.random() * 100;  // Between 0% and 100% of the height (but it's restricted to top 50% by CSS)
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;

    // Append the star to the sky
    starrySky.appendChild(star);

    // Remove and reposition the star after its animation ends (to create the reappearing effect)
    setTimeout(() => {
        star.remove();
        createStar();  // Recreate the star at a new position
    }, 2000 + Math.random() * 3000);  // Random time between 2s and 5s
}

// Generate multiple stars
for (let i = 0; i < 100; i++) {
    createStar();
}
