// JavaScript code for My First Webpage

// Function to change the header text color when clicked
function changeHeaderColor() {
    var header = document.querySelector('header');
    header.style.color = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener to trigger the changeHeaderColor function when the header is clicked
document.querySelector('header').addEventListener('click', changeHeaderColor);
