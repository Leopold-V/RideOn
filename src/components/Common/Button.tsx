import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

import { MAIN_COLOR_BUTTON_DARK } from '../../constant'

export const ButtonPrimary = ({ title, onPress }: { title: string,  onPress: () => void }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR_BUTTON_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 0.25,
    color: '#fff',
  },
});