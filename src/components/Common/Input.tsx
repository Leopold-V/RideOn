import { Dispatch } from 'react';
import { credentials } from '@Types/user';
import { TextInput } from 'react-native-paper';

export const Input = ({
  label,
  credentials,
  setCredentials,
}: {
  label: string;
  credentials: credentials;
  setCredentials: Dispatch<React.SetStateAction<credentials>>;
}) => {
  const handleChange = (value: string) => {
    setCredentials((credentials) => ({ ...credentials, [label]: value }));
  };

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={credentials[label as keyof credentials]}
      onChangeText={handleChange}
    />
  );
};
