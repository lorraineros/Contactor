import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../views/Contacts';
import ContactDetail from '../views/ContactDetail';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
