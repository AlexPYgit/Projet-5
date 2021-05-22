
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsIndexHtml} from '/libs/createCard.js';

//récuperation des informations de l'API
const arrayDataFromApi = await getApi(`${url}`);
//création des cards HTML dans le DOM
createCardsIndexHtml(arrayDataFromApi);