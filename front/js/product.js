url = window.location.href;
//console.log("adresse de la page :"+url);
Url = new URL(url);
var id = Url.searchParams.get("id");
//console.log("id ="+id);

/*fetch("http://localhost:3000/api/products")
.then(function(response){return response.json();})
.then(function(products){

    for(products of products){
        const itemimg = document.createElement("img");
        itemimg.setAttribute("src","../images/logo.png");
        itemimg.setAttribute("alt","Photographie d'un canapé}");
        let test = document.getElementsByClassName("item__img");
        test.appendChild(itemimg);
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
})*/

fetch("http://localhost:3000/api/products")
.then(function(response){return response.json();})
.then(function(products){
    let i =0;
    let j = 0;
    const URl = new URL('../images/logo.png','http://localhost:5502/front/images/logo.png');
    const item_img = document.querySelector("div.item__img");
    let texteaffiche = "Photographie d'un canapé";
    let img = document.createElement("img");
    img.setAttribute("src","http://localhost:5502/front/images/logo.png");
    img.setAttribute("alt","Photographie d'un canapé");
    item_img.appendChild(img);
    
    for(products of products){
        list_colors = [`${products.colors}`];
        console.log(`${products.colors}`);
        
        
    
    id_page = `${products._id}`;
    id_name = `${products.name}`;
    if(id != id_page){
        i++;
        //console.log(i);
    }else{
        console.log("id de la page"+id);
        console.log(i);
        title = document.getElementById("title");
        title.innerHTML = `${products.name}`;
        //console.log(`${products.name}`);
        price = document.getElementById("price");
        price.innerHTML =`${products.price}`;
        description = document.getElementById("description");
        description.innerHTML = `${products.description}`;
        colors = [`${products.colors}`];
        console.log("P"+`${products.colors.length}`);
        
        color = document.getElementById("colors");

        
        
        for(colors of `${products.colors}`){
            
            while(j!=`${products.colors.length}`){
            {color.innerHTML += "<option value="+`${products.colors[j]}`+">"+`${products.colors[j]}`+"</option>";
            console.log(j+":"+`${products.colors[j]}`);
            j++;
            }
        }
            
        }
        
    }
    }
    
}

    
)


    