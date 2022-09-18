import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SECONDARY_COLOR_DARK } from '../constant';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR_DARK,
    color: '#fff',
  }
});
  