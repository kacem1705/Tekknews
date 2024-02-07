document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevents form from submitting in the traditional way
      const email = document.getElementById('email').value;
      alert(`Thank you for subscribing, ${email}!`);
    });
  });
  