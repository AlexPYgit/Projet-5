//***** Début du programme******
 import {fillCardOfTheProducts,fillCardPRoductForChoicesOption} from '/libs/fillCardProduct.js';
 import {createCardsIndexHtml,createCardsProdcutForProduitHtml} from './libs/createCard.js';
 import url from './JS/UrlFetch.js';
 import requestArrayProductAPI from './JS/FetchApi.js';
let numberOfcomponentInArrayProduct = 0;
let dataOfEachProduct;

  // Fonction de requête de l'API pour l'afficher dans la page index.html
//   function requestArrayProductAPI (){
//       fetch(url)
//   .then(response => response.json())
//   .then(data => {
//         //Création des cards en fonction du nombre de produits
//         for(let i = 0 ; i <  data.length; i++){
//         createCardsIndexHtml();
//         dataOfEachProduct = data[numberOfcomponentInArrayProduct];
//           // Fonction d'ajout des infos dans les cards
//         fillCardOfTheProducts(dataOfEachProduct,numberOfcomponentInArrayProduct);
//         numberOfcomponentInArrayProduct++;
//       }
//   });
// }
  requestArrayProductAPI(url,fillCardOfTheProducts(dataOfEachProduct,numberOfcomponentInArrayProduct) ,createCardsIndexHtml());