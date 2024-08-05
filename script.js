// script.js
document.getElementById('smashObject').addEventListener('click', () => {
    const smashObject = document.getElementById('smashObject');
    
    // Add class to trigger the smash animation
    smashObject.classList.add('hit');
    // smashObject.classList.remove('hit-back');

    // Reset the effect after animation completes
    setTimeout(() => {
        smashObject.classList.remove('hit');
        // smashObject.classList.add('hit-back');
    }, 2000); // Duration of the effect, should match the CSS transition time
});
