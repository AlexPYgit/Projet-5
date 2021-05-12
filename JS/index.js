
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsIndexHtml} from '/libs/createCard.js';
 import {fillCardOfTheProducts,} from '/libs/fillCardProduct.js';

//récuperation des informations de l'API
  const arrayDataFromApi = await getApi(`${url}`);
  //création des cards HTML dans le DOM
  createCardsIndexHtml(arrayDataFromApi);
  //Remplissage des cards avec les infos de l'api dans le DOM
  fillCardOfTheProducts(arrayDataFromApi);



  
  