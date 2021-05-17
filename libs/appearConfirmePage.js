import {priceAllBasket} from '/libs/priceTotalBasket.js';

const appearConfirmePage = (res,valueObjectProduit ) => {
    let commandeUser = {
        lasttName : res.contact.lasttName,
        idCommande : res.orderId,
        priceBasket: priceAllBasket(valueObjectProduit),
    };
    localStorage.setItem('commande',JSON.stringify(commandeUser)); 
};
export {appearConfirmePage};