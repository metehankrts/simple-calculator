import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from './screens/CalculatorScreen';

const Stack = createNativeStackNavigator();

export default function Calculator_App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Calculator"
       >
        <Stack.Screen 

        name="Calculator" 
        component={CalculatorScreen} 
        options={{ headerShown: false }} 

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
