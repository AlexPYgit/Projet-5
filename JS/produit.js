
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsProdcutForProduitHtml} from '../libs/createCard.js';
import {pushTheProductInTheLocalStorage} from '/libs/pushTheProduct.js'

//récupère Id produit selectionné
let idProduit = window.location.search.slice(1);
//Requete API et création de la carte produit
const arrayDataFromApiOfProduct = await getApi(`${url}`+ idProduit);
createCardsProdcutForProduitHtml(arrayDataFromApiOfProduct);

//  Choix de personalisation
const  personalisationOption =  document.getElementById('formreq')
personalisationOption.addEventListener('change',  (event) => {
   const resultChioceOption =  document.querySelector('.result');
   resultChioceOption.textContent = 'Vous avez choisis l\'option : '+`${event.target.value}`;
});

//Ajouts de l'article dans le panier et
let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
const addBasket = document.getElementById('addBasket');
addBasket.addEventListener('click', function (e){
    pushTheProductInTheLocalStorage (arrayDataFromApiOfProduct,produitInTheBasket);
    e.preventDefault();
});