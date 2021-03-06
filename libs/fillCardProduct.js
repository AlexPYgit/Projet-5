
//filled the cards in the index page 
const fillCardOfTheProducts = (product)=> {
  let counterOfCardProduct = 0;
  product.forEach(element => {
    let titleCard = document.querySelectorAll("#title");
    let textCard = document.querySelectorAll('#description');
    let priceCard = document.querySelectorAll('#price');
    let image = document.querySelectorAll('#image');
    let link = document.querySelectorAll('#link');
  
    titleCard[counterOfCardProduct].innerHTML = element.name;
    textCard[counterOfCardProduct].innerHTML = element.description;
    priceCard[counterOfCardProduct].innerHTML = (element.price/100) +'€';
    link[counterOfCardProduct].href = 'produit.html?'+ element._id;
    image[counterOfCardProduct].src = element.imageUrl;
    counterOfCardProduct++
  })
}

//filled the cards in the product page 
const fillCardPRoductForChoicesOption = (data) => {
      let lenses = document.getElementById('showTheOption');
      let titleCard = document.querySelector("#title");
      let textCard = document.querySelector('#description');
      let priceCard = document.querySelector('#price');
      let image = document.querySelector('#image');

      titleCard.innerHTML = data.name;
      textCard.innerHTML = data.description;
      priceCard.innerHTML = (data.price/100) +'€';
      image.src = data.imageUrl;
      lenses = data.lenses;

      // loop for that add the option 
        let nomberOfOption = 0;
        for(let choices in data.lenses){
          choices = document.createElement('option');
          choices.innerHTML = '<option class=\'choice\' value="" ></option>\ ';
          showTheOption.appendChild(choices);
          let option = document.querySelectorAll('.choice');
          option[nomberOfOption].innerHTML = lenses[nomberOfOption];         

          nomberOfOption++
        }

}

//filled the cards in the basket page 
const fillCardBasket = (valueObjectProduit) => {
   let compteurNombreDeCard = 0;
   valueObjectProduit.forEach(element => {
    let titleCard = document.querySelectorAll("#title");
    let textCard = document.querySelectorAll('#description');
    let priceCard = document.querySelectorAll('#price');
    let image = document.querySelectorAll('#image');
    
    titleCard[compteurNombreDeCard].innerHTML = valueObjectProduit[compteurNombreDeCard].name;
    priceCard[compteurNombreDeCard].innerHTML = valueObjectProduit[compteurNombreDeCard].price + '€';
    image[compteurNombreDeCard].src = valueObjectProduit[compteurNombreDeCard].image;
    compteurNombreDeCard++;
   });
  };

export {fillCardOfTheProducts,fillCardPRoductForChoicesOption,fillCardBasket};