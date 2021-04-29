
//ne pas oublier de lancer le server.js avec l'invite de commande

//***** Début du programme******

let componentArrayProduct = 0;
let nameProd ;
const showProduct = document.querySelector('.cardProduct');

  // Fonction de requête de l'API pour l'afficher dans la page index.html
  function arrayProduct (){
      fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(data => {
  
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
                <a  href="" id="link" class="btn btn-primary">Voir le produit</a>\
              </div>\
            </div>\
          </div>\
        </div>\ ';

        //Création des cards en fonction du nombre d'éléments
        showProduct.appendChild(newName);

        nameProd = data[componentArrayProduct];
        fillCard();
        componentArrayProduct++;
      }
    
  });

}

  // Fonction d'ajout des infos dans les cards
  function fillCard(){
  let titleCard = document.querySelectorAll("#title");
  let textCard = document.querySelectorAll('#description');
  let priceCard = document.querySelectorAll('#price');
  let image = document.querySelectorAll('#image');
  let link = document.querySelectorAll('#link');

  titleCard[componentArrayProduct].innerHTML = nameProd.name;
  textCard[componentArrayProduct].innerHTML = nameProd.description;
  priceCard[componentArrayProduct].innerHTML = (nameProd.price/100) +'€';
  link[componentArrayProduct].href = 'produit.html?'+ nameProd._id;
  image[componentArrayProduct].src = nameProd.imageUrl;
  }

arrayProduct();
