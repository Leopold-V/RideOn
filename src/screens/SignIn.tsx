import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors, Snackbar, Text } from 'react-native-paper';

import { hideSnackbar } from '../redux/slices/userSlice';
import { loginUserAction } from '../redux/actions/user.actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { credentials } from '@Types/user';

import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';
import { Input } from '@Components/Common/Input';

/*
email: 'johndoe4@gmail.com',
password: '1234567',
*/

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const showSnackbar = useAppSelector((state: any) => state.user.showSnackbar);
  const message = useAppSelector((state: any) => state.user.message);
  const loadingLogin = useAppSelector((state: any) => state.user.loadingLogin);
  const [credentials, setCredentials] = useState<credentials>({
    email: '',
    password: '',
  });

  const onDismissSnackBar = () => dispatch(hideSnackbar());

  const loginUser = async () => {
    try {
      dispatch(loginUserAction({ ...credentials }));
    } catch (e: any) {
      console.log(e.message);
    }
  };

  if (loadingLogin) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }
  return (
    <Layout>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={{ uri: require('../../assets/cyclist.png') }} />
        <Text variant="headlineLarge" style={styles.title}>
          Log in
        </Text>
        <View style={styles.input}>
          <Input label="email" credentials={credentials} setCredentials={setCredentials} />
          <Input label="password" credentials={credentials} setCredentials={setCredentials} />
        </View>
        <ButtonPrimary title="Login" onPress={loginUser} />
      </View>
      <Snackbar
        visible={showSnackbar}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            onDismissSnackBar();
          },
        }}
      >
        {message}
      </Snackbar>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 70,
    marginTop: 20,
  },
  input: {
    marginBottom: 30,
  },
  tinyLogo: {
    height: 70,
    width: 70,
    marginTop: 70,
    marginHorizontal: 'auto',
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
