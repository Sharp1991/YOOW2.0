// Sample product data
const products = [
    {
        name: "Vintage Denim Jacket",
        price: 24.99,
        image: "assets/products/jacket.jpg",
        category: "clothing"
    },
    {
        name: "Retro Sunglasses",
        price: 12.50,
        image: "assets/products/sunglasses.jpg",
        category: "accessories"
    },
    {
        name: "Leather Crossbody Bag",
        price: 32.75,
        image: "assets/products/bag.jpg",
        category: "accessories"
    },
    {
        name: "Floral Summer Dress",
        price: 18.99,
        image: "assets/products/dress.jpg",
        category: "clothing"
    }
];

// Load products on homepage
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    
    if(productGrid) {
        // Display first 4 products as featured items
        const featuredProducts = products.slice(0, 4);
        
        featuredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-overlay">
                        <button class="quick-view">Quick View</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            `;
            productGrid.appendChild(productElement);
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive 10% off your first purchase.`);
            this.reset();
        });
    }
});

// Add this CSS for the product cards
const productCardCSS = `
.product-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.product-image-container {
    position: relative;
    overflow: hidden;
    height: 250px;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.product-overlay {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    background: rgba(42, 63, 84, 0.8);
    padding: 15px;
    transition: bottom 0.3s;
    text-align: center;
}

.product-card:hover .product-overlay {
    bottom: 0;
}

.quick-view {
    background: var(--secondary);
    color: var(--dark);
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--primary);
}

.product-price {
    font-weight: 600;
    color: var(--accent);
    font-size: 1.2rem;
}
`;

// Inject the product card CSS
const styleElement = document.createElement('style');
styleElement.innerHTML = productCardCSS;
document.head.appendChild(styleElement);
