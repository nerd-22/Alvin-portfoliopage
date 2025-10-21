// Mobile menu toggle
document.getElementById('menuBtn').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});