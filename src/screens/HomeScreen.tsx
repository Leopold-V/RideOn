import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootStackParamList } from '@Types/navigation';
import userService from '../services/user.service';
import storage from '../utils/asyncStorage';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const HomeScreen = ({ navigation }: Props) => {
  const updateUser = async () => {
    const body = {
      firstname: 'John2',
      lastname: 'Doe',
      password: '123456',
      email: 'johndoe2@gmail.com',
      isOnline: true,
      friendslist: ['1', '5', '7'],
    };
    try {
      await userService.updateUser(body, '01GAB4CF2ZECW5ZPJXXAG2KFVA');
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const createUser = async () => {
    const body = {
      firstname: 'John4',
      lastname: 'Doe4',
      password: '1234567',
      email: 'johndoe4@gmail.com',
    };
    try {
      await userService.createUser(body);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const loginUser = async () => {
    try {
      const data = await userService.loginUser('johndoe4@gmail.com', '1234567');
      if (data.error) {
        console.log(data.message);
      } else {
        console.log(data.message);
        await storage.storeData('token', data.token);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getUser = async () => {
    try {
      const response = await userService.getUser('01GAB4CF2ZECW5ZPJXXAG2KFVA');
      console.log(response);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const isUserAuth = async () => {
    try {
      const response = await userService.isUserAuth();
      console.log(response);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <View>
      <Button title="Login" onPress={loginUser} />
      <Button title="Create a user" onPress={createUser} />
      <Button title="Update a user" onPress={updateUser} />
      <Button title="Get a user" onPress={getUser} />
      <Button title="Is user auth ?" onPress={isUserAuth} />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
    </View>
  );
};
