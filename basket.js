
// Récupération des informations du localStorage.
let valueObjectProduit ={};
  valueObjectProduit= JSON.parse(localStorage.getItem("commande"));
let compteurNombreDeCard = 0;
let totalPrice = 0;
let products = [];



// Boucle pour créer les cards des produits sélectionné
const showProduct = document.querySelector('.cardProduct');
console.log(valueObjectProduit[0].produit_id);

for(let i =0; i <valueObjectProduit.length; i++){
     product();
     fillCardBasket();
     priceAllBasket();
     products.push(valueObjectProduit[i].produit_id);
    compteurNombreDeCard++;
};
console.log(products);
// -----Fonction création des cards------
function product (){
  let newName = document.createElement('div');
        newName.classList.add('card', 'mb-3');
        newName.style.width =  "300px";
        newName.innerHTML = '<div class="row g-0">\
          <div class="col-md-4">\
            <img class="rounded mx-auto d-block" style="width: 100%;" src="" id="image"></img>\
          </div>\
          <div class="col-md-8">\
            <div class="card-body">\
              <h5 id="title" class="card-title"></h5>\
              <p id="description" class="card-text"></p>\
              <p id="price" class="card-text" ></p>\
              <div id="option"></div>\
            </div>\
          </div>\
        </div>\
      </div>\ ';
      
  // création de card
  showProduct.appendChild(newName);
};  

// function de remplissage des card du panier
function fillCardBasket(){
//Ajout des infos dans le cards
let titleCard = document.querySelectorAll("#title");
let textCard = document.querySelectorAll('#description');
let priceCard = document.querySelectorAll('#price');
let image = document.querySelectorAll('#image');

titleCard[compteurNombreDeCard].innerHTML = valueObjectProduit[compteurNombreDeCard].name;
textCard[compteurNombreDeCard].innerHTML = valueObjectProduit[compteurNombreDeCard].option;
priceCard[compteurNombreDeCard].innerHTML = valueObjectProduit[compteurNombreDeCard].price + '€';
image[compteurNombreDeCard].src = valueObjectProduit[compteurNombreDeCard].image;
}

//Affichage du prix du panier
function priceAllBasket(){
  let priceBasket = document.getElementById('priceBasket');
  totalPrice += valueObjectProduit[compteurNombreDeCard].price;
  priceBasket.innerHTML = 'Prix :' + totalPrice + '€';
}


// ------Récuperation des infos du formulaire et tableau des produit_id------
let contact = { 
  firstName: '',
  lastName:'',
  address:'',
  city:'',
  email:'',
}

let validationTooltip01 = document.getElementById('validationTooltip01');
let validationTooltip02 = document.getElementById('validationTooltip02');
let validationTooltip03 = document.getElementById('validationTooltip03');
let validationTooltip04 = document.getElementById('validationTooltip04');
let validationTooltip05 = document.getElementById('validationTooltip05');

contact.firstName = validationTooltip01.value;
contact.lastName = validationTooltip02.value;
contact.address = validationTooltip04.value;
contact.city = validationTooltip03.value;
contact.email = validationTooltipUsername.value;
console.log(contact);

// -------Envoie du formulaire-------
document.getElementById('formValidation').addEventListener('submit', function(e) {
  envoieDuFormulair();

  e.preventDefault();
});

  function envoieDuFormulair(){
  fetch("http://localhost:3000/api/teddies/order",{
      method:"POST",
      body: JSON.stringify(contact, products),
      headers: {"Content-type": "application/json"},
    })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .then(err => console.log(err));
  };























// ------------------------VIDER LE PANIER---------------------------
// vider le panier et recharger
let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', function(){
    localStorage.clear();
    product();
});

  // Affichage si panier vide
  if(localStorage.length == 0){
    showProduct.classList.add('invisible');
    let showBasketEmpty = document.querySelector('.mt-5');
    let basketEmpty = document.createElement('h1');
    basketEmpty.innerText = 'est vide'; 
    showBasketEmpty.appendChild(basketEmpty);
    clearBasket.classList.add('invisible');
}
