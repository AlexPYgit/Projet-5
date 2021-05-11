 
 export function createCardsIndexHtml () { 
    let createCardProductForHtml = document.createElement('div');
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
          <a  href="" id="link" class="btn btn-primary">Voir le produit</a>\
        </div>\
      </div>\
    </div>\
    </div>\ ';

    //Création des cards en fonction du nombre d'éléments
    const showProductInHtml = document.querySelector('.cardProduct');
    showProductInHtml.appendChild(createCardProductForHtml);
}

   export function createCardsProdcutForProduitHtml() {
    let createCardProductForHtml = document.createElement('div');
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

        const showProductInHtml = document.querySelector('.cardProduct');
        showProductInHtml.appendChild(createCardProductForHtml);
}

