//ne pas oublier de lancer le server.js avec l'invite de commande

    //***** Début du programme******   

const showProductInHtml = document.querySelector('.cardProduct');
let idProduit = window.location.search.slice(1);
let idProductForRequestApi = idProduit;
let createCardProductForHtml ="";


  // Fonction de requête de l'API suivant le produit demandé
  function getProductOfApi (idProduit){
      fetch('http://localhost:3000/api/cameras/' + idProductForRequestApi)
  .then(response => response.json())
  .then(data => {

    //creéation de la card du produit sélectionné
     createCardProductForHtml = document.createElement('div');
          createCardProductForHtml.classList.add('card', 'mb-3');
          createCardProductForHtml.style.width =  "540px";
          createCardProductForHtml.innerHTML = '<div class="row g-0">\
            <div class="col-md-4">\
              <img class="rounded mx-auto d-block" style="width: 100%;" src="" id="image"></img>\
            </div>\
            <div class="col-md-8">\
              <div class="card-body">\
                <h5 id="title" class="card-title"></h5>\
                <p id="description" class="card-text"></p>\
                <p id="price" class="card-text"></p>\
                <form id="formreq">\
          <select placeholder="Choisissez" value="vfd" id="showTheOption">\
              <option value="" select="selected">--Please choose an option--</option>\
              </select>\
        </form>\
              </div>\
            </div>\
          </div>\
          <a  href="" id="addBasket" class="btn btn-primary">Ajouter au panier</a>\
        </div>\ ';
        
    // création de card
    showProductInHtml.appendChild(createCardProductForHtml);
        

    //Ajout des info dans le cards
    let showTheOption = document.getElementById('showTheOption');
    let titleCard = document.querySelector("#title");
    let textCard = document.querySelector('#description');
    let priceCard = document.querySelector('#price');
    let image = document.querySelector('#image');

    titleCard.innerHTML = data.name;
    textCard.innerHTML = data.description;
    priceCard.innerHTML = (data.price/100) +'€';
    image.src = data.imageUrl;
    lenses = data.lenses;
  
// Boucle for qui ajoute le nombre d'option disponible
    let nomberOfOption = 0;
    for(choice of data.lenses){
      let choice = document.createElement('option');
      choice.innerHTML = '<option class=\'choice\' value=""></option>\ ';
      showTheOption.appendChild(choice);
      let option = document.querySelectorAll('.choice');
      option[nomberOfOption].innerHTML = lenses[nomberOfOption];
      
      nomberOfOption++
    };

    // Ajouts de l'article dans le panier et choix de personalisation
    let personalisationOfProductWithOption = null;
    document.getElementById('formreq').addEventListener('change', function(e){
      personalisationOfProductWithOption = showTheOption.value;
      e.preventDefault();
    });

    let produitInTheBasket = JSON.parse(localStorage.getItem("commande"));
    const addBasket = document.getElementById('addBasket');
    // Création d'un objet qui va contenir les diférente info du produit.
      addBasket.addEventListener('click', function (e) {
        let objectProduit = {
          name : data.name,
          price: (data.price/100),
          option: personalisationOfProductWithOption,
          image: data.imageUrl,
          produit_id: data._id,
          };

      
        //Si un produit est déjà dans le panier
        if(produitInTheBasket){
          produitInTheBasket.push(objectProduit);
          localStorage.setItem("commande", JSON.stringify(produitInTheBasket));

        //si le produit n'est pas dans le panier
        }else {
          produitInTheBasket =[];
          produitInTheBasket.push(objectProduit);
          localStorage.setItem("commande", JSON.stringify(produitInTheBasket));
        };               
        e.preventDefault();
        });

     });
 };

 getProductOfApi();
