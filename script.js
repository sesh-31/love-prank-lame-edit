const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const container = document.querySelector('body');

yesButton.addEventListener('click', () => {
    response.textContent = "I already knew it, preety lady ";
    response.style.visibility = 'visible';
    container.classList.add('love-bg'); // Add the love emoji background
    noButton.style.display = 'none'; // Hide the 'No' button after 'Yes' is clicked
});

noButton.addEventListener('mouseover', () => {
    // Get the current position of the 'No' button
    const rect = noButton.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate the new position, keeping within 50px distance
    let newTop = rect.top + (Math.random() * 100 - 50); // Move up or down by 50px max
    let newLeft = rect.left + (Math.random() * 100 - 50); // Move left or right by 50px max

    // Ensure the new position is within the viewport bounds and not too far from the original
    newTop = Math.max(0, Math.min(newTop, containerRect.height - rect.height));
    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - rect.width));

    // Apply the new position
    noButton.style.transform = `translate(${newLeft - rect.left}px, ${newTop - rect.top}px)`;
});
