
    //***** Début du programme******  
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsProdcutForProduitHtml} from '../libs/createCard.js';
import {fillCardPRoductForChoicesOption} from '/libs/fillCardProduct.js'; 

// import {submitMyCommand} from '../libs/submitMyCommand.js';

let idProduit = window.location.search.slice(1);
let personalisationOfProductWithOption;

//****partie facto *****/
const arrayDataFromApiOfProduct = await getApi(`${url}`+ idProduit);
createCardsProdcutForProduitHtml();
fillCardPRoductForChoicesOption(arrayDataFromApiOfProduct);


//  Ajouts de l'article dans le panier et choix de personalisation
   const  personalizationOption =  document.getElementById('formreq')
   personalizationOption.addEventListener('change',  (event) => {
const resultChioceOption =  document.querySelector('.result');
resultChioceOption.textContent = 'Vous avez choisis l\'option : '+`${event.target.value}`;
      });

//      
//      let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
//      const addBasket = document.getElementById('addBasket');
//      // Création d'un objet qui va contenir les diférente info du produit.
//        addBasket.addEventListener('click', function (e) {

//          let objectProduit = {
//            name : data.name,
//            price: (data.price/100),
//            option: personalisationOfProductWithOption,
//            image: data.imageUrl,
//            produit_id: data._id,
//            };

 
//          //Si un produit est déjà dans le panier
//          if(produitInTheBasket){
//            produitInTheBasket.push(objectProduit);
//            localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
 
//          //si le produit n'est pas dans le panier
//          }else {
//            produitInTheBasket =[];
//            produitInTheBasket.push(objectProduit);
//            localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
//          };               
//          e.preventDefault();
//          });
//      });
//  };

//  getProductOfApi();
