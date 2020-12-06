  fetch("/products")
      .then((response) => response.json())
      .then((data) => {
          const products1 = document.querySelector(".product1");
          const products2 = document.querySelector(".product2");
          products1.innerText = data.products[0].name;
          products2.innerText = data.products[1].name;
      });