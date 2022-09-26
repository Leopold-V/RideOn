import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD2Colors, Snackbar, Text } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { hideSnackbar } from '../redux/slices/userSlice';
import { newUserAction } from '../redux/actions/user.actions';

import { registration } from '@Types/user';
import { Layout } from '@Components/Layout';
import { ButtonPrimary } from '@Components/Common/Button';
import { Input } from '@Components/Common/Input';

export const SignUp = ({ navigation }: { navigation: any }) => {
  const dispatch = useAppDispatch();
  const showSnackbar = useAppSelector((state: any) => state.user.showSnackbar);
  const message = useAppSelector((state: any) => state.user.message);
  const loadingLogin = useAppSelector((state: any) => state.user.loadingLogin);
  const [credentials, setCredentials] = useState<registration>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const onDismissSnackBar = () => dispatch(hideSnackbar());

  const createUser = async () => {
    try {
      dispatch(newUserAction({ ...credentials }));
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (message === 'Account successfully created!') {
      navigation.navigate('SignIn');
    }
  }, [message]);

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
          Register
        </Text>
        <View style={styles.input}>
          <Input label="firstname" credentials={credentials} setCredentials={setCredentials} />
          <Input label="lastname" credentials={credentials} setCredentials={setCredentials} />
          <Input label="email" credentials={credentials} setCredentials={setCredentials} />
          <Input label="password" credentials={credentials} setCredentials={setCredentials} />
        </View>
        <ButtonPrimary title="New account" onPress={createUser} />
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
