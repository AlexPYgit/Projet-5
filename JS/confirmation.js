
let storageOfDataOfTheCustomerOrder =  JSON.parse(localStorage.getItem('commande'));
let totalPriceCustomerOrder = document.getElementById('totalPrice');
let idCommandeCustomerOrder = document.getElementById('idCommande');

idCommandeCustomerOrder.innerHTML = storageOfDataOfTheCustomerOrder.idCommande;
totalPriceCustomerOrder.innerHTML = storageOfDataOfTheCustomerOrder.priceBasket + ' €';

import {clearLocalStorageAfterSubmitOfTheForm} from '/libs/clearBasket.js';
clearLocalStorageAfterSubmitOfTheForm();