  // Fonction d'ajout des infos dans les cards

export default function fillCardOfTheProducts(dataProduct,numberOfcomponentInArrayProduct){
        let titleCard = document.querySelectorAll("#title");
        let textCard = document.querySelectorAll('#description');
        let priceCard = document.querySelectorAll('#price');
        let image = document.querySelectorAll('#image');
        let link = document.querySelectorAll('#link');
      
        titleCard[numberOfcomponentInArrayProduct].innerHTML = dataProduct.name;
        textCard[numberOfcomponentInArrayProduct].innerHTML = dataProduct.description;
        priceCard[numberOfcomponentInArrayProduct].innerHTML = (dataProduct.price/100) +'€';
        link[numberOfcomponentInArrayProduct].href = 'produit.html?'+ dataProduct._id;
        image[numberOfcomponentInArrayProduct].src = dataProduct.imageUrl;
        }
