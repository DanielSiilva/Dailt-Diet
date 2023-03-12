import {ThemeProvider} from 'styled-components/native'
import {StatusBar, Text} from 'react-native'

import theme from './src/theme';

import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'

import { Home } from './src/screens/Home';






export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme} >
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      
      />
      {fontsLoaded? <Home />: <Text>Falha ao carregar</Text>}
    </ThemeProvider>
  );
}

