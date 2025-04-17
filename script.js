<script>
    // Image Modal Functionality
    const productImages = document.querySelectorAll('.product-card img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    productImages.forEach(image => {
      image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src; // Set the modal image source to the clicked image
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none'; // Close the modal
    });

    // Close modal when clicking outside of the image
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Banner Slider
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function updateSlide() {
      sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlide();
    }, 7000);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        index = parseInt(dot.getAttribute('data-index'));
        updateSlide();
      });
    });

    // Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    function showCategory(category) {
      productCards.forEach(card => {
        if (card.classList.contains(category)) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const selectedCategory = button.getAttribute('data-category');
        showCategory(selectedCategory);
      });
    });
    document.addEventListener('DOMContentLoaded', () => {
      showCategory('kreatif');
    });

    // WhatsApp Chat Customization
    const chatButtons = document.querySelectorAll('.chat-sales-btn');
    const phoneNumber = '+6289603017744';

    chatButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const productName = button.getAttribute('data-product');
        const message = encodeURIComponent(`Halo, saya ingin memesan ${productName}.`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
      });
    });
  </script>
