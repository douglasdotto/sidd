import AuthStorage from "./AuthStorage"

class ApiClient {
    constructor() {
        this.storage = new AuthStorage();
        this.authToken = null;
    }

    postApi = (endpoint, data, authorization = false) => {
        if (authorization) {
            let data = this.storage.getData();
            this.authToken = data.accessToken;
        }

        return fetch(endpoint, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + this.authToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Data-Type': 'json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status !== 400 && response.status !== 200) {
                throw response
            }
            return response.json().then(resp => {
                let notifications = resp.notifications
                if (notifications && notifications.length > 0) {
                    notifications.forEach(not => {
                        console.log(not);
                    })
                }
                return resp
            })
        })
            .then(response => {
                if (response.status !== 400 && response.status !== 200) {
                    throw response
                }
                return response.json()
            })
            .then(responseJson => responseJson)
            .catch(this.showDefaultError)
    }

    getApi = (endpoint, authorization = false) => {
        if (authorization) {
            let data = this.storage.getData();
            this.authToken = data.accessToken;
        }

        return fetch(endpoint, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + this.authToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw response
                }
                return response.json()
            })
            .then(responseJson => {
                return responseJson
            }
            )
            .catch(this.showDefaultError)
    }

    showDefaultError(err) {
        return err
    }
}

export default ApiClient
