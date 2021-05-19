import {clearLocalStorageAfterSubmitOfTheForm} from '/libs/clearBasket.js';
import {cardProductInTheBasket} from '/libs/createCard.js';
import {insertPriceInTheDOM} from '/libs/priceTotalBasket.js';
import {submitCommandeUser} from '/libs/submitCommandeUser.js';
import {displayIfBasketEmpty} from '/libs/displayIfBasketEmpty.js';
import {confirmFormUser} from '/libs/validationForm.js';

// ------------------------VIDER LE PANIER---------------------------
// vider le panier et recharger
 document.getElementById('clearBasket').addEventListener('click', function(e){
  clearLocalStorageAfterSubmitOfTheForm();});

// Récupération des informations du localStorage.
let valueObjectProduit =[];
valueObjectProduit= JSON.parse(localStorage.getItem("commande"));

  //---- Affichage si panier vide----
  if(localStorage.length == 0){
    displayIfBasketEmpty();
}

// -----Fonction création des cards------
cardProductInTheBasket(valueObjectProduit);
insertPriceInTheDOM(valueObjectProduit);

////confirmation data user
 confirmFormUser();
// ----------------------------------------------PARTIE POST SUR API------------------------------------//
// -------Envoie du formulaire et redirection vers la page de confirmation-------
document.getElementById('formValidation').addEventListener('click', function() {
  let confirmation = document.getElementById('confirmation');
  confirmation.href = 'confirmation.html';
  submitCommandeUser(valueObjectProduit);
});
