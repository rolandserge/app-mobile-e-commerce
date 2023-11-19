import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function BasketRow({basket}) {


    return (
        <View className="border border-gray-300 p-2 mb-4 flex-row items-center space-x-3 rounded-xl shadow-lg">
            <Image
                source={basket.image}
                className="w-24 h-24 rounded-lg"
            />
            <View className="flex-1">
                <Text className="font-bold">{basket.name}</Text>
                <View>
                    <View className="flex-row items-center space-x-2">
                        <View className="border border-gray-200 w-5 h-5 rounded-full"></View>
                        <Text className="text-gray-500">Colour | </Text>
                        <Text className="p-1 rounded-md bg-gray-100">Size : M</Text>
                    </View>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="font-bold">{basket.price} FCFA</Text>
                    <Text className="bg-gray-200 p-1 rounded-full">10</Text>
                </View>
            </View>
        </View>
  )
}