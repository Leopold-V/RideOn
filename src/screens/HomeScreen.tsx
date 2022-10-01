import { Button, Dimensions, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';
import MapView from 'react-native-maps';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootStackParamList } from '@Types/navigation';
import { updateUserAction } from '../redux/actions/user.actions';
import userService from '../services/user.service';
import { User } from '@Types/user';

import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';

type Props = NativeStackScreenProps<RootStackParamList>;

export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.user);

  console.log(user);
  
  /*
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
  */
 
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
      <ButtonPrimary title='Get user' onPress={getUser} />
      <Text variant="displaySmall">Map:</Text>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: 300,
    height: 500,
  },
});