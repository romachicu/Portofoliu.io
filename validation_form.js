function validateForm() {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email-address').value;
    const message = document.getElementById('comment-text').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName) {
      alert('Please enter your full name.');
      return false;
    }
    if (!email || !emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!message && message.length>20) {
      alert('Please enter a message.');
      return false;
    }

    // Dacă toate câmpurile sunt valide
    return true;
  }