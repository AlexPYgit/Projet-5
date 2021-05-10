
const getAPI = async function () {
let reponse = await  fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(data => data.result)
}

export default getAPI;