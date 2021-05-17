// card pour Page Index
const createCardsIndexHtml = (arrayData) => {
      arrayData.forEach(element => {
      const showProductInHtml = document.querySelector('.cardProduct');
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
    
    showProductInHtml.appendChild(createCardProductForHtml);
      });
}

//card pour Page Produit
const createCardsProdcutForProduitHtml = () => {

    const showProductInHtml = document.querySelector('.cardProduct');
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
    <select placeholder="Choisissez" value="" id="showTheOption">\
        <option value="" select="selected">--Please choose an option--</option>\
        </select>\
  </form>\
  <div class="result"></div>\
        </div>\
      </div>\
    </div>\
    <a  href="" id="addBasket" class="btn btn-primary">Ajouter au panier</a>\
  </div>\ ';

  showProductInHtml.appendChild(createCardProductForHtml);

}

//card pour page Basket
const cardProductInTheBasket = (valueObjectProduit) => {
  const showProduct = document.querySelector('.cardProduct');
  valueObjectProduit.forEach( element => {
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
  }); 
};

export {createCardsIndexHtml,createCardsProdcutForProduitHtml,cardProductInTheBasket};