// Create snowflakes falling from the top of the screen
const snowContainer = document.querySelector('.snow');

function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed
    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay to stagger falling
    
    snowContainer.appendChild(snowflake);

    // Remove snowflakes after they fall to the bottom
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Continuously generate snowflakes
setInterval(createSnowflakes, 200);

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}
