import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '@Types/navigation';
import { User } from '@Types/user';
import userService from '../services/user.service';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateUserAction } from '../redux/actions/user.actions';

import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';
import { StyleSheet, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList>;

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

  const getUser = async () => {
    try {
      const response = await userService.getUser('01GAB4CF2ZECW5ZPJXXAG2KFVA');
      console.log(response);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <Layout>
      <ButtonPrimary title="Update a user" onPress={updateUser} />
      <ButtonPrimary title="Get a user" onPress={getUser} />
      <ButtonPrimary title="Go to user profile" onPress={() => navigation.navigate('Settings')} />
    </Layout>
  );
};
