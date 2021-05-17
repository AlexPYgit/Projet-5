
const priceAllBasket = (valueObjectProduit) => {
  return valueObjectProduit
     .reduce((addPrice,priceProduct) => addPrice + priceProduct.price,0)
  };

  const insertPriceInTheDOM = (valueObjectProduit) => {
  let totalPrice =  priceAllBasket(valueObjectProduit);
    let priceBasket = document.getElementById('priceBasket');
    priceBasket.innerHTML = 'Prix :' + totalPrice + '€';
  }

 export {priceAllBasket,insertPriceInTheDOM};