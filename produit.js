//ne pas oublier de lancer le server.js avec l'invite de commande

    //***** Début du programme******   

const showProduct = document.querySelector('.cardProduct');
let idProduit = window.location.search.slice(1);
let idProd = idProduit;

  // Fonction de requête de l'API suivant le produit demandé
  function Product (idProduit){
      fetch('http://localhost:3000/api/teddies/' + idProd)
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
                <form id="formreq">\
          <select placeholder="Choisissez" value="vfd" id="appel">\
              <option value="" select="selected">--Please choose an option--</option>\
              </select>\
        </form>\
              </div>\
            </div>\
          </div>\
          <a  href="" id="addBasket" class="btn btn-primary">Ajouter au panier</a>\
        </div>\ ';
        
    // création de card
    showProduct.appendChild(newName);
        

    //Ajout des info dans le cards
    let appel = document.getElementById('appel');
    let titleCard = document.querySelector("#title");
    let textCard = document.querySelector('#description');
    let priceCard = document.querySelector('#price');
    let image = document.querySelector('#image');

    titleCard.innerHTML = data.name;
    textCard.innerHTML = data.description;
    priceCard.innerHTML = (data.price/100) +'€';
    image.src = data.imageUrl;
    colors = data.colors;
  
// Boucle for qui ajoute le nombre d'option disponible
    let nomberColors = 0;
    for(choice of data.colors){
      let choice = document.createElement('option');
      choice.innerHTML = '<option class=\'choice\' value=""></option>\ ';
      appel.appendChild(choice);
      let option = document.querySelectorAll('.choice');
      option[nomberColors].innerHTML = colors[nomberColors];
      
      nomberColors++
    };
    
    // Ajouts de l'article dans le panier et choix de personalisation
    let personalisation = null;
    document.getElementById('formreq').addEventListener('change', function(e){
      personalisation = appel.value;
      e.preventDefault();
    });

    const addBasket = document.getElementById('addBasket');

    // Création d'un objet qui va contenir les diférente info du produit.
    //Et création de la key 'objetc' qui va s'incrémenter a chaque 
      //ajout de produit dans le panier
    let objectProduit = {};
    let idProduit = 'idObject-' + idProd;

    addBasket.addEventListener('click', function (e) {
      objectProduit.personalisation = personalisation;
      objectProduit.idProd = idProd;
      valObjectProduit= JSON.stringify(objectProduit);
      localStorage.setItem(idProduit ,valObjectProduit);
      console.log(localStorage);

       e.preventDefault();
    });

  });
};
Product();


  

// ajouter plusieur produit au panier.
//addMultiProduitInBasket
   