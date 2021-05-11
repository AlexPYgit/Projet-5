function requestArrayProductAPI (url ,fillCardOfTheProducts  ,createCardsIndexHtml){
    fetch(url)
.then(response => response.json())
.then(data => {
      //Création des cards en fonction du nombre de produits
      for(let i = 0 ; i <  data.length; i++){
      createCardsIndexHtml();
      dataOfEachProduct = data[numberOfcomponentInArrayProduct];
        // Fonction d'ajout des infos dans les cards
      fillCardOfTheProducts(dataOfEachProduct,numberOfcomponentInArrayProduct);
      numberOfcomponentInArrayProduct++;
    }
});
}

export default requestArrayProductAPI(url,fillCardOfTheProducts(dataOfEachProduct,numberOfcomponentInArrayProduct) ,createCardsIndexHtml());