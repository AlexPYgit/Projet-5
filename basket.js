

// vider le panier et recharger
let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', function(){
    localStorage.clear();
    product();
    
});


// Création de la card du produit dans le panier
const showProduct = document.querySelector('.cardProduct');
let personalisation;
let numberCardProduit = 0;
let dataProduit;

for( key in Object.keys(localStorage)){
  let valueObjectProduit = JSON.parse(localStorage.getItem(localStorage.key(key)));
  let idProduitBasket = valueObjectProduit.idProd;
  personalisation = valueObjectProduit.personalisation;
  perso(personalisation);
  product(idProduitBasket);
}

// Affichage si panier vide
if(localStorage.length == 0){
    showProduct.classList.add('invisible');
    let showBasketEmpty = document.querySelector('.mt-5');
    let basketEmpty = document.createElement('h1');
    basketEmpty.innerText = 'est vide'; 
    showBasketEmpty.appendChild(basketEmpty);
    clearBasket.classList.add('invisible');
}

  // Fonction de requête de l'API suivant le produit demandé
  function product (idProduitBasket){
      fetch('http://localhost:3000/api/teddies/' + idProduitBasket)
  .then(response => response.json())
  .then(data => {

    //creéation de la card du produit sélectionné
    let newName = document.createElement('div');
          newName.classList.add('card', 'mb-3');
          newName.style.width =  "540px";
          newName.innerHTML = '<div class="row g-0">\
            <div class="col-md-4">\
              <img class="rounded mx-auto d-block" style="width: 100%;" src="" id="image"></img>\
            </div>\
            <div class="col-md-8">\
              <div class="card-body">\
                <h5 id="title" class="card-title"></h5>\
                <p id="description" class="card-text"></p>\
                <p id="price" class="card-text"></p>\
                <div id="option"></div>\
              </div>\
            </div>\
          </div>\
        </div>\ ';
        
    // création de card
    showProduct.appendChild(newName);

    dataProduit = data;

    fillCardBasket();
    numberCardProduit++;

    
     });
}

// function de remplissage des card du panier
function fillCardBasket(){
//Ajout des infos dans le cards
let titleCard = document.querySelectorAll("#title");
let textCard = document.querySelectorAll('#description');
let priceCard = document.querySelectorAll('#price');
let image = document.querySelectorAll('#image');
let option = document.querySelectorAll("#option");
console.log(personalisation);

titleCard[numberCardProduit].innerHTML = dataProduit.name;
textCard[numberCardProduit].innerHTML = dataProduit.description;
priceCard[numberCardProduit].innerHTML = (dataProduit.price/100) +'€';
image[numberCardProduit].src = dataProduit.imageUrl;
option[numberCardProduit].innerHTML = 'Option:\t' + perso(personalisation);
}

function perso (personalisation){
  return personalisation;
}
