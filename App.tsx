import { StatusBar } from "expo-status-bar";
import { Home } from './src/screens/home';

import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


import React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-svg';
import { expo as appName } from './app.json';
import { ListProvider } from './src/.context/ListContext';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <PaperProvider>
        <ListProvider>
          <StatusBar
            style='light'
            translucent
          />
          <Home />
        </ListProvider>
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent(appName.name, () => App);
