// Productos con enlaces de afiliado y URLs de imagen directas
const products = [
    {
        name: "Tienda de campaña",
        image: "https://m.media-amazon.com/images/I/61FM-9aDq1L.__AC_SX300_SY300_QL70_ML2_.jpg",
        description: "Descripción del producto 1",
        affiliateLink: "https://amzn.to/4ej33wp"
    },
    {
        name: "Producto 2",
        image: "https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX679_.jpg",
        description: "Descripción del producto 2",
        affiliateLink: "https://amzn.to/3NSy13B"
    }
];

// Mostrar productos populares
const productSection = document.getElementById('popular-products');
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

// Buscador de Amazon México con enlace de afiliado
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento de formulario
    const input = document.getElementById("search-input").value.trim();
    const affiliateID = "historialprec-20";
    const amazonSearchUrl = `https://www.amazon.com.mx/s?k=${encodeURIComponent(input)}&tag=${affiliateID}`;

    if (input) {
        window.open(amazonSearchUrl, "_blank"); // Abre Amazon México en una nueva pestaña
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
});
