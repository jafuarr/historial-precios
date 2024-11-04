// Productos con enlaces de afiliado y URLs de imagen directas
const products = [
    {
        name: "Tienda de campaña",
        image: "https://m.media-amazon.com/images/I/61FM-9aDq1L.__AC_SX300_SY300_QL70_ML2_.jpg", // URL directa de imagen
        description: "Descripción del producto 1",
        affiliateLink: "https://amzn.to/4ej33wp"
    },
    {
        name: "Producto 2",
        image: "https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX679_.jpg", // URL directa de imagen
        description: "Descripción del producto 2",
        affiliateLink: "https://amzn.to/3NSy13B"
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
