// Evento para el formulario de búsqueda
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        const amazonSearchUrl = `https://www.amazon.com.mx/s?k=${encodeURIComponent(searchTerm)}&tag=historialprec-20`;
        window.open(amazonSearchUrl, '_blank');
    }
});

// Productos con enlaces de afiliado e imágenes de prueba
const products = [
    {
        name: "Producto 1",
        image: "https://via.placeholder.com/200", // URL de una imagen de prueba
        description: "Descripción del producto 1",
        affiliateLink: "https://amzn.to/48EnuCH"
    },
    {
        name: "Producto 2",
        image: "https://via.placeholder.com/200", // URL de una imagen de prueba
        description: "Descripción del producto 2",
        affiliateLink: "https://amzn.to/48ypSee"
    }
];

const productSection = document.getElementById('popular-products');

// Generación de cada tarjeta de producto
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.affiliateLink}" target="_blank">Comprar en Amazon</a>
    `;
    productSection.appendChild(productDiv);
});

