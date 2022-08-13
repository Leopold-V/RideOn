import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, View } from 'react-native';
import { RootStackParamList } from '@Types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const HomeScreen = ({ navigation }: Props) => {
  const updateUser = async () => {
    const response = await fetch('http://localhost:3001/api/v1/users/01GAB4CF2ZECW5ZPJXXAG2KFVA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: 'John',
        lastname: 'Doe',
        password: '123456',
        email: 'johndoe2@gmail.com',
        isOnline: true,
        friendslist: ['1', '5', '7']
      }),
    });
    const data = await response.json();
    console.log(data);
  }


  return (
    <View>
      <Button title="Create a user" onPress={updateUser} />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
    </View>
  );
};
