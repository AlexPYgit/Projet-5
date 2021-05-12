const submitMyCommand = () =>{
    let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
     const addBasket = document.getElementById('addBasket');
     // Création d'un objet qui va contenir les diférente info du produit.
       addBasket.addEventListener('click', function (e) {

         let objectProduit = {
           name : data.name,
           price: (data.price/100),
           option: personalisationOfProductWithOption,
           image: data.imageUrl,
           produit_id: data._id,
           };

 
         //Si un produit est déjà dans le panier
         if(produitInTheBasket){
           produitInTheBasket.push(objectProduit);
           localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
 
         //si le produit n'est pas dans le panier
         }else {
           produitInTheBasket =[];
           produitInTheBasket.push(objectProduit);
           localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
         };               
     });
}

export {submitMyCommand};