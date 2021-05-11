//ne pas oublier de lancer le server.js avec l'invite de commande

    //***** Début du programme******  
import {fillCardPRoductForChoicesOption,fillCardOfTheProducts} from '/libs/fillCardProduct.js'; 
import {createCardsProdcutForProduitHtml,createCardsIndexHtml} from './libs/createCard.js';
import choicesOption from './libs/choicesOption.js';
import submitMyCommand from './libs/submitMyCommand.js';

let idProduit = window.location.search.slice(1);
let idProductForRequestApi = idProduit;
let personalisationOfProductWithOption;


  // Fonction de requête de l'API suivant le produit demandé
  function getProductOfApi (idProduit){
      fetch('http://localhost:3000/api/cameras/' + idProductForRequestApi)
  .then(response => response.json())
  .then(data => {
    //creéation de la card du produit sélectionné
     createCardsProdcutForProduitHtml();
     fillCardPRoductForChoicesOption(data);
""
      // Ajouts de l'article dans le panier et choix de personalisation
      document.getElementById('formreq').addEventListener('change', function (e){
        personalisationOfProductWithOption = showTheOption.value;
      });
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
         e.preventDefault();
         });
  
     });
 };

 getProductOfApi();
