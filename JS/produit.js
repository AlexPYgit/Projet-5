
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsProdcutForProduitHtml} from '../libs/createCard.js';
import {fillCardPRoductForChoicesOption} from '/libs/fillCardProduct.js'; 
import {pushTheProductInTheLocalStorage} from '/libs/pushTheProduct.js'

let idProduit = window.location.search.slice(1);

//Requete API et création de la carte produit
const arrayDataFromApiOfProduct = await getApi(`${url}`+ idProduit);
createCardsProdcutForProduitHtml();
fillCardPRoductForChoicesOption(arrayDataFromApiOfProduct);

//  Choix de personalisation
   const  personalisationOption =  document.getElementById('formreq')
   personalisationOption.addEventListener('change',  (event) => {
        const resultChioceOption =  document.querySelector('.result');
        resultChioceOption.textContent = 'Vous avez choisis l\'option : '+`${event.target.value}`;
    });

//Ajouts de l'article dans le panier et
    let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
    const addBasket = document.getElementById('addBasket');
    // Création d'un objet qui va contenir les diférente info du produit.
        addBasket.addEventListener('click', function (e){
        pushTheProductInTheLocalStorage (arrayDataFromApiOfProduct,produitInTheBasket);
        console.log(localStorage);
        e.preventDefault();
    });

console.log(localStorage);