
// Function to sort the characters in a string alphabetically
function alphabetizeString(str) {
    // Convert the string to an array of characters
    let charArray = str.split('');
    
    // Sort the array alphabetically
    charArray.sort();
    
    // Join the array back into a string and return
    return charArray.join('');
}

// Get DOM elements
const inputField = document.getElementById('inputString');
const sortButton = document.getElementById('sortButton');
const resultArea = document.getElementById('result');

// Add event listener to the button
sortButton.addEventListener('click', function() {
    // Get the input value
    const inputValue = inputField.value.trim();
    
    // Check if the input is not empty
    if (inputValue.length > 0) {
        // Sort the string and display the result
        const sortedString = alphabetizeString(inputValue);
        resultArea.textContent = sortedString;
        
        // Highlight the result with a subtle animation
        resultArea.style.backgroundColor = '#e8f5e9';
        setTimeout(() => {
            resultArea.style.backgroundColor = '#f9f9f9';
        }, 500);
    } else {
        // If input is empty, show an error message
        resultArea.textContent = 'Please enter a string to sort.';
        resultArea.style.color = '#f44336';
        
        // Reset the error after 2 seconds
        setTimeout(() => {
            resultArea.textContent = '';
            resultArea.style.color = '#333';
        }, 2000);
    }
});

// Add event listener for Enter key press
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sortButton.click();
    }
});

// Add a test case example that executes on page load
window.addEventListener('DOMContentLoaded', function() {
    // Set a default example
    inputField.value = 'webmaster';
    
    // Show a subtle hint
    setTimeout(() => {
        resultArea.textContent = 'Try clicking the button or press Enter to see the result';
        resultArea.style.color = '#757575';
        resultArea.style.fontSize = '14px';
    }, 1000);
});