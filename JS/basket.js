import {clearLocalStorageAfterSubmitOfTheForm} from '/libs/clearBasket.js';
import {cardProductInTheBasket} from '/libs/createCard.js';
import {insertPriceInTheDOM} from '/libs/priceTotalBasket.js';
import {submitCommandeUser} from '/libs/submitCommandeUser.js';
import {displayIfBasketEmpty} from '/libs/displayIfBasketEmpty.js';
import {confirmFormUser} from '/libs/validationForm.js';

// ------------------------clear Basket---------------------------
// clean the basket and refresh 
 document.getElementById('clearBasket').addEventListener('click', function(e){
  clearLocalStorageAfterSubmitOfTheForm();});

// get data of the localstorage 
let valueObjectProduit =[];
valueObjectProduit= JSON.parse(localStorage.getItem("commande"));

  //---- show if basket is empty ----
  if(localStorage.length == 0){
    displayIfBasketEmpty();
}

// ----- function create the cards ------
cardProductInTheBasket(valueObjectProduit);
insertPriceInTheDOM(valueObjectProduit);

////user data  confirmation 
 confirmFormUser();
// ----------------------------------------------section POST on API------------------------------------//
// ------- Send formular and redirect to the confirmation page  -------
document.getElementById('formValidation').addEventListener('click', function() {
  let confirmation = document.getElementById('confirmation');
  confirmation.href = 'confirmation.html';
  submitCommandeUser(valueObjectProduit);
});
