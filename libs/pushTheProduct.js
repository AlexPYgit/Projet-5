const pushTheProductInTheLocalStorage = (data, produitInTheBasket) => {

    let objectProduit = {
    name : data.name,
    price: (data.price/100),
    image: data.imageUrl,
    produit_id: data._id,
    };

    //Si un produit est déjà dans le panier
    if(produitInTheBasket){
    produitInTheBasket.push(objectProduit);
    localStorage.setItem("commande", JSON.stringify(produitInTheBasket));

    //si le produit n'est pas dans le panier
    } else {
    produitInTheBasket =[];
    produitInTheBasket.push(objectProduit);
    localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
    };             
}  


export {pushTheProductInTheLocalStorage};