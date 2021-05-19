const confirmFormUser = ()=> {
    let confirmComande = document.querySelector('#confirm-comande')
  let confirmation = document.getElementById('confirmation');
  confirmComande.addEventListener('click', function(e){
     if(formValidation.checkValidity()===false){
       e.preventDefault();
     }else{
       confirmComande.classList.add("invisible");
       confirmation.classList.remove("invisible");
     }
   });
  }
  export{confirmFormUser};