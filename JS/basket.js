
//------------------------------PARTIE CREATION DE LA PAGE PANIER---------------------------//
import {clearLocalStorageAfterSubmitOfTheForm} from '/libs/clearBasket.js';
import {cardProductInTheBasket} from '/libs/createCard.js';
import {insertPriceInTheDOM} from '/libs/priceTotalBasket.js';
import {objetcPostApi} from '/libs/construcorOfObjetcForPostApi.js';
import {submitCommandeUser} from '/libs/submitCommandeUser.js';


// ------------------------VIDER LE PANIER---------------------------
// vider le panier et recharger
let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', function(e){
  clearLocalStorageAfterSubmitOfTheForm();
});

// Récupération des informations du localStorage.
let valueObjectProduit =[];
valueObjectProduit= JSON.parse(localStorage.getItem("commande"));

// créer les cards des produits sélectionnés
const showProduct = document.querySelector('.cardProduct');

  //---- Affichage si panier vide----
  if(localStorage.length == 0){
    showProduct.classList.add('invisible');
    let showBasketEmpty = document.querySelector('.mt-5');
    let basketEmpty = document.createElement('h1');
    basketEmpty.innerText = 'est vide'; 
    showBasketEmpty.appendChild(basketEmpty);
    clearBasket.classList.add('invisible');
}

// -----Fonction création des cards------
cardProductInTheBasket(valueObjectProduit);
insertPriceInTheDOM(valueObjectProduit);

// ----------------------------------------------PARTIE POST SUR API------------------------------------//
// -------Envoie du formulaire et redirection vers la page de confirmation-------
document.getElementById('formValidation').addEventListener('click', function(e) {
  submitCommandeUser(objetcPostApi(valueObjectProduit));
  let confirmation = document.getElementById('confirmation');
  confirmation.href = 'confirmation.html';
});

submitCommandeUser(valueObjectProduit);

