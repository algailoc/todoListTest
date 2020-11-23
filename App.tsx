import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {MainScreen} from "./src/screens/main-screen/MainScreen";
import {DefaultTheme} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from "./src/store";

// LogBox.ignoreLogs(["Require cycle:"]);

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
        background: '#fff',
    },
};


const App = () => {
  return (
      <Provider store={store}>
          <PaperProvider theme={theme}>
            <MainScreen />
          </PaperProvider>
      </Provider>
  );
};
export default App;
