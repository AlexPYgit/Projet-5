
//ne pas oublier de lancer le server.js avec l'invite de commande
//Premié coed pour requète à suprimer quand fichier fini. 
function requete(idProduit){

let nom = document.getElementById('name');
let colors = document.getElementById('colors');
let price = document.getElementById('price');
let img = document.getElementById('img');

fetch('http://localhost:3000/api/teddies/'+idProduit)
.then(response => response.json())
.then(data =>{
    nom.innerHTML = data.name;
    colors.innerHTML = data.colors;
    price.innerHTML = (data.price/100) + ' €';
    img.src = data.imageUrl
    console.log(data)
});
}

document.getElementById('formreq').addEventListener('submit' , function(event){
    let idProduit = document.getElementById('appel').value;
    console.log(idProduit);
    event.preventDefault();

    requete(idProduit);

}, returne = false);

//***** Début du programme******


// Afficher les éléments au clique sur le bouton "Voir les produits"
//Sélectionne quelle produits à afficher
//créer un élément cardProduit avec boucle for
//au click sur le bouton voir de teddies =>
//parcour l'API 
    // pour chaque objet, créer une carte
    //pour chaque carte faire une fetch pour insèrer les infos du produit

    let componentArrayProduct = 0;
    let nameProd ;

// Fonction de requête de l'API suivant le produit demandé
function arrayProduct (product){
    fetch('http://localhost:3000/api/'+ product )
.then(response => response.json())
.then(data => {

 
    const cardTeddies = showProduct.querySelector('div');  
    const testCard = showProduct.contains(cardTeddies);
    if(testCard ==false){
    
      //Création des cards en fonction du nombre de produits
      for(let i = 0 ; i <  data.length; i++){
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
              <form id="formreq">\
        <select placeholder="Choisissez" id="appel">\
            <option value="">--Please choose an option--</option>\
            <option id=\'choice\' value=""></option>\
            </select>\
      </form>\
            </div>\
          </div>\
        </div>\
      </div>\ ';

     
      //fonction de création des cards
      showProduct.appendChild(newName);

        nameProd = data[componentArrayProduct];
        fillCard();
        componentArrayProduct++;
    }

    console.log(testCard);
  }
  //Permet de remplacer les produits déja appelé
  else{ 
    for(let i = 0; i < data.length; i++){
      let titleCard = document.querySelectorAll("#title");
      let textCard = document.querySelectorAll('#description');
      let priceCard = document.querySelectorAll('#price');
      let image = document.querySelectorAll('#image');

      titleCard[i].innerHTML = data[i].name;
      textCard[i].innerHTML = data[i].description;
      priceCard[i].innerHTML = (data[i].price/100) +'€';
      image[i].src = data[i].imageUrl;

      titleCard[i].innerHTML = data[i].name;
    }

  }
  console.log(data)

  });

}


const showProduct = document.querySelector('.cardProduct');
//Affiche produit Teddies
document.getElementById('showElementTeddy').addEventListener('click' , function(){

  arrayProduct('teddies');


},returne = false);

//Affiche produit CAM
document.getElementById('showElementCam').addEventListener('click' , function(){
    arrayProduct('cameras');

},returne = false);

//Affiche produits Oak
document.getElementById('showElementOak').addEventListener('click' , function(){
    arrayProduct('furniture');
},returne = false);


function fillCard(){
//Ajout des info dans le cards
let titleCard = document.querySelectorAll("#title");
let textCard = document.querySelectorAll('#description');
let priceCard = document.querySelectorAll('#price');
let image = document.querySelectorAll('#image');
let choice = document.querySelectorAll('#choice');
let perso = nameProd.color;

titleCard[componentArrayProduct].innerHTML = nameProd.name;
textCard[componentArrayProduct].innerHTML = nameProd.description;
priceCard[componentArrayProduct].innerHTML = (nameProd.price/100) +'€';
image[componentArrayProduct].src = nameProd.imageUrl;
choice[componentArrayProduct].innerHTML = nameProd.colors;
 console.log(perso);
}


//Fonction de personalisation
function personalisation(){

}