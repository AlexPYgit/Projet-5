import {getIdProductForPostApi} from '/libs/getIdProductForPostApi.js';

const constructorOfObjetcForPostApi = () => {
    let contact = { 
        firstName: '',
        lastName:'',
        address:'',
        city:'',
        email:'',
      }
      
      let validationTooltip01 = document.getElementById('validationTooltip01');
      let validationTooltip02 = document.getElementById('validationTooltip02');
      let validationTooltip03 = document.getElementById('validationTooltip03');
      let validationTooltip04 = document.getElementById('validationTooltip04');
      let validationTooltipUsername = document.getElementById('validationTooltipUsername');
      
      contact.firstName = validationTooltip01.value;
      contact.lastName = validationTooltip02.value;
      contact.address = validationTooltip04.value;
      contact.city = validationTooltip03.value;
      contact.email = validationTooltipUsername.value;
      return contact
};

const objectPostApi = (valueObjectProduit) => {
    let data = {};
    data.contact = constructorOfObjetcForPostApi();
    data.products = getIdProductForPostApi(valueObjectProduit);
    return data
};

export {objectPostApi};