
//---------------------------------------PARTIE CREATION DE LA PAGE PANIER---------------------------//
import {clearLocalStorageAfterSubmitOfTheForm} from '/libs/clearBasket.js';
import {cardProductInTheBasket} from '/libs/createCard.js';
import {fillCardBasket} from '/libs/fillCardProduct.js';
import {priceAllBasket,insertPriceInTheDOM} from '/libs/priceTotalBasket.js';
import {getIdProductForPostApi} from '/libs/getIdProductForPostApi.js';
import {objetcPostApi} from '/libs/construcorOfObjetcForPostApi.js'
import {appearConfirmePage} from '/libs/appearConfirmePage.js';
// ------------------------VIDER LE PANIER---------------------------
// vider le panier et recharger
let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', function(e){
  clearLocalStorageAfterSubmitOfTheForm();
});

// Récupération des informations du localStorage.
let valueObjectProduit =[];
valueObjectProduit= JSON.parse(localStorage.getItem("commande"));
//compeutre multi fonction
let compteurNombreDeCard = 0;

// Boucle pour créer les cards des produits sélectionnés
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
// function de remplissage des card du panier
fillCardBasket(valueObjectProduit);
insertPriceInTheDOM(valueObjectProduit)

// ----------------------------------------------PARTIE POST SUR API------------------------------------//

console.log(JSON.stringify(objetcPostApi(valueObjectProduit)));

// -------Envoie du formulaire et redirection vers la page de confirmation-------
document.getElementById('formValidation').addEventListener('click', function(e) {
  commande(objetcPostApi(valueObjectProduit));
  let confirmation = document.getElementById('confirmation');
  confirmation.href = 'confirmation.html';
});

 // ---Envoie de l'objet à l'API---
 const commande = async function(data) {
  let response = await fetch("http://localhost:3000/api/cameras/order", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
      "Accept" : 'application/json'
    },
    body: JSON.stringify(objetcPostApi(valueObjectProduit)),
  })
   if(response.ok){
     let res = await response.json();
     console.log(res.orderId)

     appearConfirmePage(res);

   }else{
     console.error('Une erreur : ', response.status,', c\'est produite.' );
   }

};
 commande(objetcPostApi(valueObjectProduit));

// function de récuération des infos commande pour la page de confirmation
// function appearConfirmePage (res){
  // objet récuperant l'orderId et le pix de la commande
  // let commandeUser = {
  //   lasttName : res.contact.lasttName,
  //   idCommande : res.orderId,
  //   priceBasket: priceAllBasket(valueObjectProduit),
  // };
  // localStorage.setItem('commande',JSON.stringify(commandeUser));  
// }




