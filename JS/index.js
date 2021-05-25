
import {getApi} from '/libs/FetchApi.js';
import {url} from '/libs/UrlFetch.js';
import {createCardsIndexHtml} from '/libs/createCard.js';

// get data of the API
const arrayDataFromApi = await getApi(`${url}`);
//créate card in the DOM 
createCardsIndexHtml(arrayDataFromApi);