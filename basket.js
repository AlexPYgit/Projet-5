
//---------------------------------------PARTIE CREATION DE LA PAGE PANIER---------------------------//

// ------------------------VIDER LE PANIER---------------------------
// vider le panier et recharger
let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', function(e){
    localStorage.clear();
});

// Récupération des informations du localStorage.
let valueObjectProduit ={};
valueObjectProduit= JSON.parse(localStorage.getItem("commande"));
let compteurNombreDeCard = 0;
let totalPrice = 0;
let products = [];

// Boucle pour créer les cards des produits sélectionnés
const showProduct = document.querySelector('.cardProduct');

  //---- Affichage si panier vide----
  if(localStorage.length == 0){
    showProduct.classList.add('invisible');
    let showBasketEmpty = document.querySelector('.mt-5');
    let basketEmpty = document.createElement('h1');
    basketEmpty.innerText = 'est vide'; 
    showBasketEmpty.appendChild(basketEmpty);
    clearBasket.classList.add('invisible');
}

// -----Boucle pour créer le nombre de cards necessaire----
for(let i =0; i <valueObjectProduit.length; i++){
     product();
     fillCardBasket();
     priceAllBasket();
     products.push(valueObjectProduit[i].produit_id);
    compteurNombreDeCard++;
};
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
      
  // -----création de card dans le html-----
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

// ----------------------------------------------PARTIE POST SUR API------------------------------------//

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

// ---objet envoyé à l'API---
let data = {};
data.contact = contact;
data.products = products;


// -------Envoie du formulaire et redirection vers la page de confirmation-------
document.getElementById('formValidation').addEventListener('click', function(e) {
  commande(data);
  let confirmation = document.getElementById('confirmation');
  confirmation.href = 'confirmation.html';
});

 // ---Envoie de l'objet à l'API---
 const commande= async function(data) {
  let response = await fetch("http://localhost:3000/api/cameras/order", {
    method:"POST",
    headers: {
      "Content-type": "application/json",
      "Accept" : 'application/json'
    },
    body: JSON.stringify(data),
  })
   if(response.ok){
     let res = await response.json();
     console.log(res.orderId)
     console.log(totalPrice)

     callCommandeUser(res);

   }else{
     console.error('Une erreur : ', response.status,', c\'est produite.' );
   }

};
commande(data);

let comandeUser = JSON.parse(localStorage.getItem("commande"));
// function de récuération des infos commande pour la page de confirmation
function callCommandeUser (res){
  // objet récuperant l'orderId et le pix de la commande
  let commandeUser = {
    lasttName : res.contact.lasttName,
    idCommande : res.orderId,
    priceBasket: totalPrice,
  };
  localStorage.setItem('commande',JSON.stringify(commandeUser));  

}




