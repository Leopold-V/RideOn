import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import { store } from './src/redux/store';

import { useAppSelector } from './src/redux/hooks';
import { HomeScreen } from './src/pages/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'RideOn' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const ProfileScreen = ({ navigation, route }: any) => {
  const username = useAppSelector((state: any) => state.user.username);

  return (
    <>
      <Text>{username}</Text>
      {route.params && <Text>This is {route.params.name || username}'s profile</Text>}
    </>
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
