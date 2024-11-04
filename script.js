document.getElementById("search-button").addEventListener("click", function() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Limpiar resultados anteriores

    // Ejemplo de productos (en un futuro reemplazar por resultados de API)
    const products = [
        {
            name: "Producto 1",
            image: "https://m.media-amazon.com/images/I/81VUedJZyBL.__AC_SX300_SY300_QL70_ML2_.jpg",
            link: "https://amzn.to/48EnuCH"
        },
        {
            name: "Producto 2",
            image: "https://m.media-amazon.com/images/I/41HCeyEFICL._AC_SX679_.jpg",
            link: "https://amzn.to/48ypSee"
        }
    ];

    products.forEach(product => {
        if (product.name.toLowerCase().includes(input)) {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <a href="${product.link}" target="_blank">Ver en Amazon</a>
            `;
            productContainer.appendChild(productCard);
        }
    });
});
