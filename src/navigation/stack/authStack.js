import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/auth/login'
import { AntDesign } from '@expo/vector-icons';
import RegisterScreen from '../../screens/auth/register'
import { TouchableOpacity } from 'react-native';

export default function AuthStack() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='login' 
        component={LoginScreen} 
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              className="ml-3 p-2 bg-white rounded-xl border border-gray-300"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: ""
        })}
      />
      <Stack.Screen 
        name='register' 
        component={RegisterScreen} 
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              className="ml-3 p-2 bg-white rounded-xl border border-gray-300"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: ""
        })}
      />
    </Stack.Navigator>
  )
}