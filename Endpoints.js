var url = "https://siddproject.azurewebsites.net"
//var url = "https://localhost:44302";

const endpoints = {
    user: {
        login: `${url}/loginapp`,
        insertPatient: `${url}/insertPatient`,
        getPatients: `${url}/getPatients`,
    },
    app: {
        insertAcolhimento: `${url}/insertAcolhimento`,
        insertUnity: `${url}/insertUnity`,
        insertPfeffer: `${url}/insertPfeffer`,
        insertCDR: `${url}/insertCDR`,
        insertGDS: `${url}/insertGDS`,
        insertMoCA: `${url}/insertMoCA`,
        insertMEEM: `${url}/insertMEEM`,
        getSintomas: `${url}/getSintomas`,
        insertTesteSintoma: `${url}/insertTesteSintoma`,
    }
}

export default endpoints;