document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  const form = document.getElementById('validationForm');
  const inputs = form.querySelectorAll('input, select, textarea');
  const successMessage = document.getElementById('successMessage');

  // Set validation patterns
  document.getElementById('firstName').pattern = '[A-Za-z]{2,}';
  document.getElementById('lastName').pattern = '[A-Za-z]{2,}';
  document.getElementById('email').pattern = '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}';
  document.getElementById('phone').pattern = '\\d{10}';
  document.getElementById('city').pattern = '[A-Za-z\\s]{2,}';
  document.getElementById('description').minLength = 10;

  // Error messages
  const errorMessages = {
    firstName: 'Enter a valid first name',
    lastName: 'Enter a valid last name',
    email: 'Enter a valid email',
    phone: 'Enter a 10-digit phone number',
    address: 'Address is required',
    city: 'City name should be letters only',
    state: 'Select a state',
    hosting: 'Select an option',
    description: 'Minimum 10 characters required'
  };

  // Set up validation listeners
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      validate(this);
    });
    
    input.addEventListener('blur', function() {
      validate(this);
    });
  });

  // Form submit handler
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formValid = true;
    
    // Check all inputs
    inputs.forEach(input => {
      if (!validate(input)) {
        formValid = false;
      }
    });
    
    // If form is valid, show success message
    if (formValid) {
      successMessage.style.display = 'block';
      
      // Reset form after delay
      setTimeout(() => {
        form.reset();
        resetFormStyles();
        successMessage.style.display = 'none';
      }, 3000);
    }
  });
  
  // Validate a single input
  function validate(input) {
    // For radio buttons
    if (input.type === 'radio') {
      return validateRadioGroup(input);
    }
    
    const isValid = input.checkValidity();
    const error = input.closest('.form-group').querySelector('.error');
    const container = input.closest('.input-icon');
    
    // Show/hide error message
    if (error) {
      error.textContent = errorMessages[input.id] || 'Invalid input';
      error.style.display = isValid || !input.value ? 'none' : 'block';
    }
    
    // Change border color for visual feedback
    if (container && input.value) {
      container.style.borderColor = isValid ? '#4CAF50' : '#f44336';
    }
    
    return isValid;
  }
  
  // Validate radio button group
  function validateRadioGroup(radio) {
    const name = radio.name;
    const isChecked = document.querySelector(`input[name="${name}"]:checked`) !== null;
    
    // Show/hide error message
    const error = radio.closest('.form-group').querySelector('.error');
    if (error) {
      error.style.display = isChecked ? 'none' : 'block';
    }
    
    return isChecked;
  }
  
  // Reset all form styles
  function resetFormStyles() {
    document.querySelectorAll('.input-icon').forEach(container => {
      container.style.borderColor = '#ccc';
    });
    
    document.querySelectorAll('.error').forEach(error => {
      error.style.display = 'none';
    });
  }
});
