import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function SavedRow({product}) {
  return (
    <>
        <View className="border border-gray-300 my-2 p-2 flex-row items-center space-x-3 rounded-lg shadow-lg">
            <Image
                source={product.image}
                className="w-24 h-24 rounded-lg"
            />
            <View className="flex-1">
                <TouchableOpacity className="items-center justify-end flex-row">
                    <EvilIcons name="close-o" size={19} color="red" />
                </TouchableOpacity>
                <Text className="font-bold">New T-shirts</Text>
                <View>
                    <View className="flex-row items-center space-x-2">
                        <Ionicons name="star" size={18} color="black" />
                        <Text className="text-gray-500">4.8 Starts ||</Text>
                        <Text className="p-1 rounded-md bg-gray-100">3.447 vots</Text>
                    </View>
                </View>
                <Text className="font-bold">13 000 FCFA</Text>
            </View>
        </View>
    </>
  )
}