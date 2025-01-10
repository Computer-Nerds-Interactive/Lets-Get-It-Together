// Ensure the script runs after the page has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all instances of the .hide-order-button div
    const hideOrderButtons = document.querySelectorAll('.hide-order-button');
  
    // Loop through each instance of the .hide-order-button
    hideOrderButtons.forEach((hideButton) => {
      // Find the .book-component_wrapper inside the .hide-order-button
      const bookComponentWrapper = hideButton.querySelector('.book-component_wrapper');
  
      // If .book-component_wrapper exists, hide it
      if (bookComponentWrapper) {
        bookComponentWrapper.style.display = 'none';
      }
    });
  });