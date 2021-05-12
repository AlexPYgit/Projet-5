

const   getApi =  (urlApi) => {
    return  fetch(urlApi)
    .then(response => response.json())
  }

export {getApi};