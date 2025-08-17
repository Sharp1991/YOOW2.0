// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Sample Product Data
const products = [
    {
        id: "PROD001",
        name: "Nike Air Max 90",
        price: "₹3,200",
        size: "US 9",
        condition: "Excellent",
        category: "shoes",
        image: "nike-airmax.jpg"
    },
    {
        id: "PROD002",
        name: "Levi's 501 Jeans",
        price: "₹1,800",
        size: "32W",
        condition: "Good",
        category: "men",
        image: "levis-jeans.jpg"
    },
    {
        id: "PROD003",
        name: "Zara Floral Dress",
        price: "₹1,200",
        size: "M",
        condition: "Excellent",
        category: "women",
        image: "zara-dress.jpg"
    },
    {
        id: "PROD004",
        name: "Tommy Hilfiger Polo",
        price: "₹1,000",
        size: "L",
        condition: "Good",
        category: "men",
        image: "tommy-polo.jpg"
    },
    {
        id: "PROD005",
        name: "Vintage Denim Jacket",
        price: "₹2,200",
        size: "M",
        condition: "Fair",
        category: "vintage",
        image: "denim-jacket.jpg"
    },
    {
        id: "PROD006",
        name: "Adidas Track Pants",
        price: "₹1,500",
        size: "S",
        condition: "Excellent",
        category: "sportswear",
        image: "adidas-pants.jpg"
    },
    {
        id: "PROD007",
        name: "H&M Kids Jacket",
        price: "₹800",
        size: "6-7 Years",
        condition: "Good",
        category: "kids",
        image: "kids-jacket.jpg"
    },
    {
        id: "PROD008",
        name: "Designer Leather Bag",
        price: "₹2,800",
        size: "One Size",
        condition: "Excellent",
        category: "accessories",
        image: "leather-bag.jpg"
    }
];

// WhatsApp Business Number
const whatsappNumber = "919876543210";

// Function to generate WhatsApp link
function generateWhatsAppLink(product) {
    const message = `Hi YOOW! I'm interested in ${product.name} (${product.id}). Is this available?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

// Display products on homepage
function displayFeaturedProducts() {
    const container = document.querySelector('.featured-products .products-grid');
    if (!container) return;
    
    // Show only 4 products on homepage
    const featuredProducts = products.slice(0, 4);
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <i class="fas fa-tshirt"></i>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-details">Size: ${product.size} | Condition: ${product.condition}</p>
                <a href="${generateWhatsAppLink(product)}" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Chat to Buy
                </a>
            </div>
        </div>
    `).join('');
}

// Display products on catalogue page
function displayCatalogueProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <i class="fas fa-tshirt"></i>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-details">Size: ${product.size} | Condition: ${product.condition}</p>
                <a href="${generateWhatsAppLink(product)}" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Inquire via WhatsApp
                </a>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchInput.addEventListener('keyup', performSearch);
    searchButton.addEventListener('click', performSearch);
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedProducts();
    displayCatalogueProducts();
    setupFilterButtons();
    setupSearch();
    setupContactForm();
});
