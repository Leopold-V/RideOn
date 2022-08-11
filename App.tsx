import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import { store } from './src/redux/store';
import { useAppSelector } from './src/redux/hooks';

import { HomeScreen } from '@Screens/HomeScreen';
import { RootStackParamList } from '@Types/navigation';

const RootStack = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'RideOn' }} />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ navigation, route }: Props) => {
  const username = useAppSelector((state: any) => state.user.username);

  return (
    <View>
      <Text>{username}</Text>
      {route.params && <Text>This is {route.params.name || username}'s profile</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12163a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
