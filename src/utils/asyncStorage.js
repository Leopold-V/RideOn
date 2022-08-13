import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e.message);
  }
};

export const getData = async (key) => {
  let value,
    error = null;
  try {
    value = await AsyncStorage.getItem(key);
    if (value !== null) {
      error = null;
    } else {
      error = 'Nothing found';
    }
  } catch (e) {
    value = null;
    error = e.message;
  }
  return { value, error };
};
