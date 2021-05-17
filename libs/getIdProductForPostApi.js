
const getIdProductForPostApi = (valueObjectProduit) => {
return valueObjectProduit
.map(idProduct => idProduct.produit_id)
}

export {getIdProductForPostApi};