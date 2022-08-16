import AsyncStorage from '@react-native-async-storage/async-storage';

export type LocalStorage = {
  error: boolean;
  token: string | null;
  message: string;
};

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    console.log(e.message);
  }
};

const getData = async (key: string): Promise<LocalStorage> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return { error: false, token: value, message: 'Success' };
    }
    throw new Error('No token found in your local storage');
  } catch (e: any) {
    return { error: true, token: null, message: e.message };
  }
};

export default { getData, storeData };
