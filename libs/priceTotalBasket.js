
  const insertPriceInTheDOM = (valueObjectProduit) => {
  let totalPrice =  valueObjectProduit.reduce((addPrice,priceProduct) => addPrice + priceProduct.price,0);
    let priceBasket = document.getElementById('priceBasket');
    priceBasket.innerHTML = 'Prix :' + totalPrice + '€';
    return totalPrice
  }
 

 export {insertPriceInTheDOM};