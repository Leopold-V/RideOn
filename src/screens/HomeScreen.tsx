import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootStackParamList } from '@Types/navigation';
import { User, UserLoginAPIResponse } from '@Types/user';
import userService from '../services/user.service';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUserAction, updateUserAction } from '../redux/actions/user.actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user);

  console.log(user);

  const updateUser = async () => {
    const user: User = {
      id: '01GAB4CF2ZECW5ZPJXXAG2KFVA',
      firstname: 'John2',
      lastname: 'Doe',
      email: 'johndoe2@gmail.com',
      isOnline: true,
      friendslist: ['1', '5', '7'],
    };
    try {
      dispatch(updateUserAction(user));
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const createUser = async () => {
    const user: User = {
      firstname: 'John4',
      lastname: 'Doe4',
      password: '1234567',
      email: 'johndoe4@gmail.com',
    };
    try {
      await userService.createUser(user);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const loginUser = async () => {
    try {
      const credentials = {
        email: 'johndoe4@gmail.com',
        password: '1234567',
      };
      //const data: UserLoginAPIResponse = await userService.loginUser('johndoe4@gmail.com', '1234567');
      dispatch(loginUserAction(credentials));
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
