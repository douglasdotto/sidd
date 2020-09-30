export const AUTH_DATA_KEY = "SIDD_AUTH_DATA";

class AuthStorage {
  login(authData) {
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(authData));
  }

  logout() {
    localStorage.removeItem(AUTH_DATA_KEY);
  }

  isAuthenticated() {
    var json = JSON.parse(localStorage.getItem(AUTH_DATA_KEY));
    if (json !== null) {
      if (new Date(json.expiration) >= new Date()) {
        return true;
      }
      else {
        localStorage.removeItem(AUTH_DATA_KEY);
        return false;
      }
    } else {
      return false;
    }
  }

  getData() {
    return JSON.parse(localStorage.getItem(AUTH_DATA_KEY));
  }
}

export default AuthStorage;

