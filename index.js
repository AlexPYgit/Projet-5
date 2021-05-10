
//***** Début du programme******
 import fillCardOfTheProducts from '/libs/fillCardProduct.js';
 import createCardsIndexHtml from '/libs/createCard.js';

let numberOfcomponentInArrayProduct = 0;
let dataOfEachProduct;
// const showProductInHtml = document.querySelector('.cardProduct');

  // Fonction de requête de l'API pour l'afficher dans la page index.html
  function requestArrayProductAPI (){
      fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
  .then(data => {
        //Création des cards en fonction du nombre de produits
        for(let i = 0 ; i <  data.length; i++){
        createCardsIndexHtml();

        dataOfEachProduct = data[numberOfcomponentInArrayProduct];
          // Fonction d'ajout des infos dans les cards
        fillCardOfTheProducts(dataOfEachProduct,numberOfcomponentInArrayProduct);
        numberOfcomponentInArrayProduct++;
      }
  });

}
  requestArrayProductAPI();


import getAPI from './libs/getAPI.js';
  getAPI();
  console.log(getAPI());