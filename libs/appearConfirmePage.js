import {insertPriceInTheDOM} from '/libs/priceTotalBasket.js';

const appearConfirmePage = (getDataApiAfterPost,valueObjectProduit ) => {
    let commandeUser = {
        lasttName : getDataApiAfterPost.contact.lasttName,
        idCommande : getDataApiAfterPost.orderId,
        priceBasket: insertPriceInTheDOM(valueObjectProduit),
    };
    localStorage.setItem('commande',JSON.stringify(commandeUser)); 
};
export {appearConfirmePage};