import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../views/LoginScreen';
import { RegisterScreen } from '../views/RegisterScreen';
import { ProtectedScreen } from '../views/ProtectedScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor:'white'
            }
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      </Stack.Navigator>
  );
}
