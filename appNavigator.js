import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RouterBottom from './src/navigation/bottomNav/router'
import GetStartedScreen from './src/screens/started'
import ProductStack from './src/navigation/stack/productStack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/stack/authStack'

export default function AppNavigator() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='GetStarted' component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name='main' component={RouterBottom} options={{ headerShown: false }}/>
        <Stack.Screen name='product' component={ProductStack} options={{ headerShown: false }} />
        <Stack.Screen name='auth' component={AuthStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}