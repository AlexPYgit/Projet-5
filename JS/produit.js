
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsProdcutForProduitHtml} from '../libs/createCard.js';
import {pushTheProductInTheLocalStorage} from '/libs/pushTheProduct.js'

//Get the Id of selected product  
let idProduit = window.location.search.slice(1);
//Requeste API and create product card
const arrayDataFromApiOfProduct = await getApi(`${url}`+ idProduit);
createCardsProdcutForProduitHtml(arrayDataFromApiOfProduct);

// choice the product option  
const  personalisationOption =  document.getElementById('formreq')
personalisationOption.addEventListener('change',  (event) => {
   const resultChioceOption =  document.querySelector('.result');
   resultChioceOption.textContent = 'Vous avez choisis l\'option : '+`${event.target.value}`;
});

// Add the product in the basket 
let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
const addBasket = document.getElementById('addBasket');
addBasket.addEventListener('click', function (e){
    pushTheProductInTheLocalStorage (arrayDataFromApiOfProduct,produitInTheBasket);
    e.preventDefault();
});