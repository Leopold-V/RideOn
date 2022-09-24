import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { store } from './src/redux/store';

import { isUserAuthAction } from './src/redux/actions/user.actions';

import { Navigation } from '@Components/Navigation';
import { MAIN_COLOR_BUTTON_DARK, MAIN_COLOR_DARK, SECONDARY_COLOR_DARK } from './src/constant';

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: MAIN_COLOR_DARK,
      secondary: SECONDARY_COLOR_DARK,
      button_primary: MAIN_COLOR_BUTTON_DARK
    },
  };

   useEffect(() => {
     store.dispatch(isUserAuthAction());
   })
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  ); 
}
