// Import required modules
import './styles.scss';

// Wait for the document to finish loading before running any code
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the button on the page
  const button = document.querySelector('.btn-primary');

  // Add an event listener to the button
  button.addEventListener('click', () => {
    alert('Thank you for your interest in AudreySugarmakPhilly!');
  });
});
