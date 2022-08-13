import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootStackParamList } from '@Types/navigation';
import userService from '../services/user.service';
import { storeData } from '../utils/asyncStorage';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const HomeScreen = ({ navigation }: Props) => {
  const updateUser = async () => {
    const body = {
      firstname: 'John',
      lastname: 'Doe',
      password: '123456',
      email: 'johndoe2@gmail.com',
      isOnline: true,
      friendslist: ['1', '5', '7'],
    };
    await userService.updateUser(body);
  };

  const createUser = async () => {
    const body = {
      firstname: 'John4',
      lastname: 'Doe4',
      password: '1234567',
      email: 'johndoe4@gmail.com',
    };
    await userService.createUser(body);
  };

  const loginUser = async () => {
    const data = await userService.loginUser('johndoe4@gmail.com', '1234567');
    if (data.error) {
      console.log(data.message);
    } else {
      console.log(data.message);
      storeData('token', data.token);
    }
  };

  return (
    <View>
      <Button title="Login" onPress={loginUser} />
      <Button title="Create a user" onPress={createUser} />
      <Button title="Update a user" onPress={updateUser} />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
    </View>
  );
};
