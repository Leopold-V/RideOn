import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export const ButtonPrimary = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const { colors } = useTheme();

  return (
    <Button onPress={onPress} mode="contained" buttonColor={colors.button_primary}>
      {title}
    </Button>
  );
};
