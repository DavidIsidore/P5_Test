url = window.location.href;
Url = new URL(url);
var id = Url.searchParams.get("id");



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
    }else{
        console.log("id de la page"+id);
        console.log(i);
        title = document.getElementById("title");
        title.innerHTML = `${products.name}`;
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


    