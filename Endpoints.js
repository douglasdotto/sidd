var url = "https://siddproject.azurewebsites.net"
//var url = "https://localhost:44302";

const endpoints = {
    user: {
        login: `${url}/loginapp`,
        getPatients: `${url}/getPatients`,
    },
    app: {
        insertUnity: `${url}/insertUnity`,
        insertPfeffer: `${url}/insertPfeffer`,
        insertCDR: `${url}/insertCDR`,
        insertMoCA: `${url}/insertMoCA`,
        insertMEEM: `${url}/insertMEEM`,
    }
}

export default endpoints;