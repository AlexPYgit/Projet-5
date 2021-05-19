const displayIfBasketEmpty = () => {
    const showProduct = document.querySelector('.cardProduct');
    showProduct.classList.add('invisible');
    let showBasketEmpty = document.querySelector('.mt-5');
    let basketEmpty = document.createElement('h1');
    basketEmpty.innerText = 'est vide'; 
    showBasketEmpty.appendChild(basketEmpty);
    clearBasket.classList.add('invisible');
};
export {displayIfBasketEmpty};