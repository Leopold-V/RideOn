import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

import { isUserAuthAction } from './src/redux/actions/user.actions';

import { Navigation } from '@Components/Navigation';

export default function App() {

   useEffect(() => {
     store.dispatch(isUserAuthAction());
   })
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
