import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e.message);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return { error: false, token: value, message: 'Success' };
    }
    throw new Error('No token found in your local storage');
  } catch (e) {
    return { error: true, token: null, message: e.message };
  }
};

export default { getData, storeData };
