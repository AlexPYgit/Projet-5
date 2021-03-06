import {appearConfirmePage} from '/libs/appearConfirmePage.js';
import {objectPostApi} from '/libs/constructorOfObjetcForPostApi.js';
import {url} from '/libs/UrlFetch.js';


const submitCommandeUser = async (valueObjectProduit) => {
  let responseApiAfterPost = await fetch(url + "order", {
    method:"POST",
        headers: {
          "Content-type": "application/json",
          "Accept" : 'application/json'
        },
        body: JSON.stringify(objectPostApi(valueObjectProduit)),
      })
       if(responseApiAfterPost.ok){
         let getDataApiAfterPost = await responseApiAfterPost.json();
         appearConfirmePage(getDataApiAfterPost,valueObjectProduit);
       }else{
         console.error('Une erreur : ', responseApiAfterPost.status,', c\'est produite.');
       }
    };

export {submitCommandeUser};