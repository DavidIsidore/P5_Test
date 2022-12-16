fetch("http://localhost:3000/api/products")
.then(function(response){return response.json();})
.then(function(products){

    for(products of products){
        /*const itemimg = document.createElement("img");
        itemimg.setAttribute("src","../images/logo.png");
        itemimg.setAttribute("alt","Photographie d'un canapé}");
        let test = document.getElementsByClassName("item__img");
        test.appendChild(itemimg);*/
        let test = document.querySelector("div.item__img");
        //test.innerHTML = "<img src="//localhost:5502/front/images/logo.png" alt="Photographie d'un canapé">";

        let item_title = document.getElementById("title");
        item_title.innerHTML = `${products.name}`;

        let price = document.getElementById("price");
        price.innerHTML=`${products.price}`;

        let description = document.getElementById("description");
        description.innerHTML=`${products.description}`;

        color = `${products.colors.length}`;
        console.log(color + " couleurs disponibles");
        colors = document.getElementById("colors");
        let i=0;
        while(i<color){
            i++;
            colors.innerHTML="<option value="+`${products.colors[i]}`+">"+`${products.colors}`+"</option>";
            console.log(i);
            console.log(`${products.colors[i]}`);
            
            

        }



    }

})
.catch(function(error){
    alert("Erreur de chargement des produits");
})