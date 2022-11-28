import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';
import Login from '../src/pages/Login/login';

const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          title="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={HomeScreen}
          options={{
            title: 'Dükkan',
            headerStyle: {backgroundColor: '#90caf9'},

            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailsScreen}
          options={{
            title: 'Detay',
            headerStyle: {backgroundColor: '#90caf9'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
