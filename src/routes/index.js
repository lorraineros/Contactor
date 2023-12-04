import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../views/MainView'
const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes
