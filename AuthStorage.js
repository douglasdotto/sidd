export const AUTH_DATA_KEY = "SIDD_AUTH_DATA";
import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  async login(authData) {
    await AsyncStorage.setItem(AUTH_DATA_KEY, JSON.stringify(authData))
  }

  async logout() {
    await AsyncStorage.removeItem(AUTH_DATA_KEY)
  }

  async isAuthenticated() {
    try {
      var json = JSON.parse(await AsyncStorage.getItem(AUTH_DATA_KEY));
      if (json !== null) {
        if (new Date(json.expiration) >= new Date()) {
          return true;
        }
        else {
          AsyncStorage.removeItem(AUTH_DATA_KEY)
          return false;
        }
      } else {
        return false;
      }
    } catch { return false; }
  }

  async getData() {
    try {
      var data = await AsyncStorage.getItem(AUTH_DATA_KEY);
      try {
        data = JSON.parse(data);
      }
      catch { }
      return data;
    } catch { return null }
  }
}

export default AuthStorage;

