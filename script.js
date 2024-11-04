// Array de productos populares
const products = [
    {
        name: "Coche de Juguete",
        image: "https://m.media-amazon.com/images/I/81VUedJZyBL.__AC_SX300_SY300_QL70_ML2_.jpg",
        link: "https://amzn.to/48EnuCH"
    },
    {
        name: "Taza de Café",
        image: "https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX679_.jpg",
        link: "https://amzn.to/48ypSee"
    },
    // Puedes añadir más productos populares aquí
];

// Función para mostrar productos populares
function displayPopularProducts() {
    const productContainer = document.getElementById("popular-products");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <a href="${product.link}" target="_blank">Ver en Amazon</a>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Event listener para el botón de búsqueda
document.getElementById("search-button").addEventListener("click", function() {
    const input = document.getElementById("search-input").value.trim();
    const affiliateID = "historialprec-20"; // Tu ID de afiliado de Amazon
    const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(input)}&tag=${affiliateID}`; // URL de búsqueda en Amazon

    if (input) { // Verifica que haya un término de búsqueda
        // Redirigir a la búsqueda de Amazon con tu enlace de afiliado
        window.location.href = amazonSearchUrl;
    } else {
        alert("Por favor, ingresa un término de búsqueda."); // Mensaje de alerta si no se ingresa nada
    }
});

// Llamar a la función para mostrar productos populares al cargar la página
window.onload = displayPopularProducts;
