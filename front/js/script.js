fetch("http://localhost:3000/api/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    console.log(products);

    for (products of products) {
      const lien = document.createElement("a");
      lien.setAttribute("href", "./product.html?id=" + `${products._id}`);
      lien.classList.add("lien");
      let ajout = document.getElementById("items");
      ajout.appendChild(lien);
      //console.log(lien);
      var url = new URL(lien);
      var id = url.searchParams.get("id");
      console.log("id de l'adresse: " + id);
      console.log("id de la page: " + window.location.href);

      const article = document.createElement("article");
      lien.appendChild(article);

      const img = document.createElement("img");
      img.setAttribute("src", `${products.imageUrl}`);
      img.setAttribute("alt", `${products.altTxt}`);
      article.appendChild(img);

      let content2 = document.createElement("h3");
      content2.classList.add("productName");
      content2.innerHTML = `${products.name}`;
      article.appendChild(content2);

      let content3 = document.createElement("p");
      content3.classList.add("productDescription");
      content3.innerHTML = `${products.description}`;
      article.appendChild(content3);
    }
  });


