const priceAllBasket = (valueObjectProduit) =>{
    let priceBasket = document.getElementById('priceBasket');
    for( let prce in valueObjectProduit ){
      price += valueObjectProduit.price;
  
  };
  console.log(valueObjectProduit.price);


    // totalPrice = valueObjectProduit.forEach(totalPrice => {
    //     return totalPrice += valueObjectProduit.price;
    // });
    // priceBasket.innerHTML = 'Prix :' + totalPrice + '€';
  };

export {priceAllBasket};