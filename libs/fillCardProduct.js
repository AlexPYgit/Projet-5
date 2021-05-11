  // Fonction d'ajout des infos dans les cards

export  function fillCardOfTheProducts(dataProduct,numberOfcomponentInArrayProduct){
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

export function fillCardPRoductForChoicesOption (data){
        //Ajout des info dans le cards
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

      // Boucle for qui ajoute le nombre d'option disponible
        let nomberOfOption = 0;
        for(let choices in data.lenses){
          choices = document.createElement('option');
          choices.innerHTML = '<option class=\'choice\' value=""></option>\ ';
          showTheOption.appendChild(choices);
          let option = document.querySelectorAll('.choice');
          option[nomberOfOption].innerHTML = lenses[nomberOfOption];
          
          nomberOfOption++
        };

}
