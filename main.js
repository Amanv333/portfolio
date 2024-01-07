document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Basic form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // You can perform additional actions here, such as sending the form data to a server
  
      // For this example, let's just show an alert
      alert('Form submitted successfully!');
      contactForm.reset();
    });
  });
  