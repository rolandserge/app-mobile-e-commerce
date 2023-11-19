import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function GetStartedScreen() {

    const navigation = useNavigation()

    return (
        <View className="relative flex-1 w-full">
            <Image
                source={
                    require('../../../assets/start.jpg')
                }
                className="h-full w-full object-fill"
                // resizeMode='contain'
                // resizeMethod='cover' 
            />
            <View className="absolute top-20 w-full items-center">
                <Text className="w-[45%] text-center text-white font-bold text-4xl">WELCOME TO STORE.</Text>
            </View>

            <View className='absolute bottom-10 w-full'>
                <TouchableOpacity 
                    className="mx-6 p-4 rounded-lg bg-white"
                    onPress={() => navigation.navigate('auth', { screen: 'login'})}
                >
                    <Text className="text-center font-bold">Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}
