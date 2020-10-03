var url = "https://siddproject.azurewebsites.net"
//var url = "https://localhost:44302";

const endpoints = {
    user: {
        login: `${url}/loginapp`,
        getPatients: `${url}/getPatients`,
    },
}

export default endpoints;