
let storage =  JSON.parse(localStorage.getItem('commande'));
let totalPrice = document.getElementById('totalPrice');
let idCommande = document.getElementById('idCommande');

idCommande.innerHTML = storage.idCommande;
totalPrice.innerHTML = storage.priceBasket + ' €';

