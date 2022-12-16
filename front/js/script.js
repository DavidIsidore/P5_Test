/*async function main(){
    const products = await getProducts();
    for (product of products) {
        showProduct(product);
    }
}

const url = "http://localhost:3000/api/products";
fetch(url).then(function(response){
    return response.json;
})
.then(function(product){
    return product;
})
.catch(function(error){
    alert("Errur de chargement des produits");
})*/


fetch("http://localhost:3000/api/products")
.then(function(response){return response.json();})
.then(function(products){console.log(products);
    
    
for(products of products){
    const lien = document.createElement("a");
    lien.setAttribute("href","./product.html?id=" + `${products._id}`);
    lien.classList.add("lien");
    let ajout = document.getElementById("items");
    ajout.appendChild(lien);

    

    const article = document.createElement("article");
    lien.appendChild(article);
    
    
    
    const img = document.createElement("img");
    img.setAttribute("src",`${products.imageUrl}`);
    img.setAttribute("alt",`${products.altTxt}`);
    article.appendChild(img);
    
    
    
    let content2 = document.createElement("h3");
    content2.classList.add("productName");
    content2.innerHTML=`${products.name}`;
    article.appendChild(content2);

    let content3 = document.createElement("p");
    content3.classList.add("productDescription");
    content3.innerHTML = `${products.description}`;
    article.appendChild(content3);

    
    
    

    
    
}




})

/*async function main(){
    const products = await getProducts();
    for(product of products){
        showProduct(product);
    }
}

function getProducts(){
    return fetch("http://localhost:3000/api/products")
    .then(function(response){
        return response.json();
    })
    .then(function(product){
        return product;
    })
    .catch(function(error){
        console.log("Erreur de chargement des produits");
    });
}

function showProduct(){
    for(product of products){
        const lien = document.createElement("a");
        lien.setAttribute("href",`./products.html?id=${products._id}`);
        //console.log ${products._id};
        lien.classList.add("lien");
        let ajout = document.getElementById("items");
        ajout.appendChild(lien);
    }
}*/

