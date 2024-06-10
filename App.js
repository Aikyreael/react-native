/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/components/Home";
import Detail from "./src/components/Detail";


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Home}
              />
              <Stack.Screen
                  name="Detail"
                  component={Detail}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
