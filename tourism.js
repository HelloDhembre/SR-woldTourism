document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('nav.main-nav ul.nav-links');

  menuToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('show');
  });

  // Scroll animation for cards
  const scrollElements = document.querySelectorAll('.scroll-animate');

  function elementInView(el, offset = 0) {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  }

  function displayScrollElement(element) {
    element.classList.add('visible');
  }

  function hideScrollElement(element) {
    element.classList.remove('visible');
  }

  function handleScrollAnimation() {
    // console.log('Scroll event fired');
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        // console.log('Element in view:', el);
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  // Trigger animation check on load
  handleScrollAnimation();

  // Back to Top button functionality
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Explore Destinations button smooth scroll
  const exploreBtn = document.getElementById('exploreBtn');
  const destinationsSection = document.getElementById('destinations');

  exploreBtn.addEventListener('click', () => {
    destinationsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
