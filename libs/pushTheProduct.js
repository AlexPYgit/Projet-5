const pushTheProductInTheLocalStorage = (data, produitInTheBasket) => {

    let objectProduit = {
    name : data.name,
    price: (data.price/100),
    image: data.imageUrl,
    produit_id: data._id,
    };

    // if one product is already in the basket
    if(produitInTheBasket){
    produitInTheBasket.push(objectProduit);
    localStorage.setItem("commande", JSON.stringify(produitInTheBasket));

    // if the product is not in the basket 
    } else {
    produitInTheBasket =[];
    produitInTheBasket.push(objectProduit);
    localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
    };             
}  


export {pushTheProductInTheLocalStorage};