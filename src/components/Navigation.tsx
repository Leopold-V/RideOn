import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import { RootStackParamList } from '@Types/navigation';
import { useAppSelector } from '../redux/hooks';
import { MAIN_COLOR_DARK } from '../../src/constant';

import {
  HomeScreen,
  CompareScreen,
  SettingScreen,
  NotificationScreen,
  SignIn,
  SignUp,
} from '@Screens/.';
import { Layout } from '@Components/Layout';

const RootStack = createBottomTabNavigator<RootStackParamList>();

export const Navigation = () => {
  const user: any = useAppSelector((state: any) => state.user);

  if (user.loading) {
    return (
      <Layout>
        <Text style={styles.text}>Loading...</Text>
      </Layout>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.container,
          headerTintColor: '#fff',
        }}
      >
        {user?.isAuthenticated ? (
          <>
            <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'RideOn' }} />
            <RootStack.Screen name="Compare" component={CompareScreen} />
            <RootStack.Screen name="Notifications" component={NotificationScreen} />
            <RootStack.Screen name="Settings" component={SettingScreen} />
          </>
        ) : (
          <>
            <RootStack.Screen name="SignIn" component={SignIn} />
            <RootStack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_DARK,
  },
  text: {
    color: '#fff',
  },
});
