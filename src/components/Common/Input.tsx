import { Dispatch } from 'react';
import { TextInput } from 'react-native-paper';

import { credentials, registration } from '@Types/user';

export const Input = ({
  label,
  credentials,
  setCredentials,
}: {
  label: string;
  credentials: credentials;
  setCredentials: Dispatch<React.SetStateAction<registration>> | Dispatch<React.SetStateAction<credentials>>;
}) => {
  const handleChange = (value: string) => {
    setCredentials((credentials: any) => ({ ...credentials, [label]: value }));
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
