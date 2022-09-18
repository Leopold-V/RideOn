import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { Layout } from '@Components/Layout'

export const CompareScreen = () => {
  return (
    <Layout>
      <Text style={styles.text}>
        Compare screen
      </Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});