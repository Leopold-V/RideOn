import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { noUser } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';

export const SettingScreen = () => {
  const user = useAppSelector((state: any) => state.user.user);

  const dispatch = useAppDispatch();

  const logOut = () => {
    AsyncStorage.clear();
    dispatch(noUser());
  };

  return (
    <Layout>
      <Text style={styles.text}>This is {user?.firstname || 'unknown'}'s profile</Text>
      <ButtonPrimary title="Logout" onPress={logOut} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {},
});
