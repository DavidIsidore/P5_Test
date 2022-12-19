url = window.location.href;
Url = new URL(url);
var id = Url.searchParams.get("id");

fetch("http://localhost:3000/api/products/" + id)
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let i = 0;
    let j = 0;

    const item_img = document.querySelector("div.item__img");
    let img = document.createElement("img");
    img.setAttribute("src", `${products.imageUrl}`); 
    img.setAttribute("alt", `${products.altTxt}`); 
    item_img.appendChild(img);

    //console.log("id de la page" + id);
    //console.log(i);
    title = document.getElementById("title");
    title.innerHTML = `${products.name}`;
    price = document.getElementById("price");
    price.innerHTML = `${products.price}`;
    description = document.getElementById("description");
    description.innerHTML = `${products.description}`;
    colors = [`${products.colors}`];
    //console.log("P" + `${products.colors.length}`);
    localStorage.setItem("produit", `${products.name}`);
    var nom = localStorage.getItem("produit");

    console.log(nom);

    color = document.getElementById("colors");

    for (colors of products.colors) {
      color.innerHTML += "<option value=" + colors + ">" + colors + "</option>";
    }

    const targetButton = document.getElementById("addToCart");
    targetButton.addEventListener('click',(event)=>{
        event.preventDefault();
        //ajout panier
        const productcolor = document.getElementById("colors").value;
        const productquantite = document.getElementById("quantity").value;
        
        const cart = {
            productid:products._id,
            color:productcolor,
            quantite:productquantite
        }
        localStorage.setItem("panier",JSON.stringify(cart));
        window.confirm("Produit ajouté au panier");
    });
  });

  