 // Function to create email message
 function createEmail() {
  const subject = encodeURIComponent("Subject of the Email");
  const body = encodeURIComponent("Hello, this is a predefined message in the email.");
  const email = "inf@Tectape.com";  // Replace with your email address

  // Create the mailto URL
  const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

  // Open the default email client with the prefilled message
  window.location.href = mailtoURL;
}

// Function to send WhatsApp message
function sendWhatsAppMessage() {
  const phoneNumber = "+96171061537"; // Replace with the recipient's phone number
  const message = encodeURIComponent("Hello, this is a predefined message on WhatsApp.");

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${+96171061537}?text=${message}`;

  // Open WhatsApp (on mobile or desktop)
  window.open(whatsappURL, "_blank");
}




// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Animations can be added via JavaScript (here, we'll use basic class toggling)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const services = document.querySelector('.products');

    if (window.scrollY > 100) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }

    if (window.scrollY > 600) {
        services.classList.add('scrolled');
    }
});




         