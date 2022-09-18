import { StyleSheet, Text } from 'react-native';

import { Layout } from '@Components/Layout';

export const NotificationScreen = () => {
  return (
    <Layout>
      <Text style={styles.text}>
        Notifications screen
      </Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});