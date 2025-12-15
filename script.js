fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        // appeler afficheProduit a l'interieur (ici)
        afficheProduits(data)


        data.forEach(element => {

        });


    })

//role : afficher dans la page web les cartes de produits
//parametre : des produits -> tableau d'objet
//return : rien

function afficheProduits(tableaudeproduits) {

    //afficher tout les titres des produits
    //prendre les produits un par un -> foreach

    tableaudeproduits.forEach(produit => {
        let titre = produit.title
        let prix = produit.price
        let description = produit.description
        let categorie = produit.category
        let image = produit.image
        let id = produit.id
        let note =produit.rating.rate
        let utilisateur =produit.rating.count

        
    });

  tableaudeproduits.forEach(produit => {
document.getElementById("section1").innerHTML +=`<div class="card mgt100 ">
                                                 <img src ="${produit.image}" alt="" class="carteimg">
                                                 <div class="">
                                                 <h2 class="police">${produit.title}</h2>
                                                 <p>${produit.category}</p>
                                                 <p class="prix">${produit.price} euros </p>
                                                 <p><i class="ph-fill ph-user"></i>${produit.rating.count}</p>
                                                 <p class ="yellow"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>${produit.rating.rate}</p>
                                                 </div>
                                                 
                                                 <a href="" class="button2">Acheter</a>
                                                 </div>`});
}




 
