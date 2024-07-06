const fakeStoreUrl = 'https://fakestoreapi.com/products';

fetch(fakeStoreUrl)
  .then(response => response.json())
  .then(data => {
    const products = data.filter(product => product.category === "clothing");

    const productsOver20000 = products.filter(product => product.price > 20000);

    if (productsOver20000.length > 0) {
      const randomProduct = productsOver20000[Math.floor(Math.random() * productsOver20000.length)];

      const productHtml = `
        <div class="product">
          <img src="${randomProduct.image}" alt="${randomProduct.title}">
          <h2>${randomProduct.title}</h2>
          <p>${randomProduct.description}</p>
          <p>Price: $${randomProduct.price}</p>
        </div>
      `;

      document.getElementById('concurso').innerHTML = productHtml;
    } else {
      document.getElementById('concurso').innerHTML = "<p>No hay productos elegibles para el concurso en este momento.</p>";
    }
  })
  .catch(error => console.log('Error:', error));
