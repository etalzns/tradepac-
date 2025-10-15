function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.trim();

  if (query.length === 0) {
    // If empty, highlight the input border in red briefly to show error
    searchInput.style.borderColor = 'red';
    setTimeout(() => {
      searchInput.style.borderColor = ''; // reset after 1.5s to your CSS color
    }, 1500);
    searchInput.focus();
    return;
  }

  // Otherwise, perform search (replace this with your actual search logic)
  alert(`Searching for: "${query}"`);
}
document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateCartUI();

    // Listen for all add-to-cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");

            // Get product info from data attributes
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            // Check if already in cart
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            // Save to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update the cart icon UI
            updateCartUI();
        });
    });

    function updateCartUI() {
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        cartCount.textContent = totalItems;
        cartTotal.textContent = totalPrice.toFixed(2);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.dataset.index);
            slider.style.transform = `translateX(-${index * 100}%)`;

            // Update active dot
            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
        });
    });
});
this.parentElement.querySelector('.slider').scrollBy({left: 200, behavior: 'smooth'})
// Function to scroll the brands slider
function scrollBrands(direction) {
  const slider = document.querySelector('.brands-slider');
  if (!slider) return;

  // scroll amount in px — adjust as needed
  const scrollAmount = 120; 
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Optionally, disable scroll if at start or end (for UI feedback)
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.brands-slider');
  const leftArrow = document.querySelector('.brands-slider-container .arrow.left');
  const rightArrow = document.querySelector('.brands-slider-container .arrow.right');

  function updateArrows() {
    if (!slider) return;
    // If at the very left, disable left arrow
    if (slider.scrollLeft <= 0) {
      leftArrow.style.visibility = 'hidden';
    } else {
      leftArrow.style.visibility = 'visible';
    }
    // If scrolled to rightmost
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      rightArrow.style.visibility = 'hidden';
    } else {
      rightArrow.style.visibility = 'visible';
    }
  }

  // on scroll, update arrows
  slider.addEventListener('scroll', updateArrows);
  // on load
  updateArrows();
  // on window resize (may change scrollWidth)
  window.addEventListener('resize', updateArrows);
});


