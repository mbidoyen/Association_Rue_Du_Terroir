import React from 'react';

import {store} from './app/store.ts';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './app/pages/Accueil/Home.tsx';
import Actualites from './app/pages/Actualites/Actualites.tsx';
import Register from './app/pages/Inscription/Inscription.tsx';
import Login from './app/pages/Connexion/Connexion.tsx';
import NousContacter from './app/pages/Nous_Contacter/NousContacter.tsx';
import {Provider} from 'react-redux';
import DashBoardUser from './app/pages/DashBoard/DashBoardUser.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Accueil" component={HomePage} />
          <Stack.Screen name="Actualites" component={Actualites} />
          <Stack.Screen name="Inscription" component={Register} />
          <Stack.Screen name="Connexion" component={Login} />
          <Stack.Screen name="ContactezNous" component={NousContacter} />
          <Stack.Screen name={'Profil'} component={DashBoardUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
