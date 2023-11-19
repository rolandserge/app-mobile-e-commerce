import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { products } from '../../../assets/data/product';
import BasketRow from '../../components/checkout/basket';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BasketScreen() {

    const navigation = useNavigation()

    return (
    <>
        <ScrollView className="bg-white p-5" showsVerticalScrollIndicator={false}>
            <View className="mb-8">
                <Text className="text-2xl font-bold mb-2">Shipping address</Text>
                <View className="flex-row items-center border-gray-300 rounded-xl space-x-3 border p-3 mb-3">
                    <View className="p-3 rounded-full bg-gray-200">
                        <SimpleLineIcons name="location-pin" size={24} color="black" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-lg">Home</Text>
                        <Text className="text-gray-400">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Recusandae</Text>
                    </View>
                    <TouchableOpacity className="">
                        <FontAwesome name="pencil-square-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="pb-6">
                <Text className="text-2xl font-bold mb-2">Order list</Text>

                {
                    products.map((product, index) => (
                        <BasketRow basket={product} key={index} />
                    ))
                }
            </View>
        </ScrollView>
        <SafeAreaView className="bg-white">
            <View className="rounded-tl-[50px] border border-gray-200 p-8 rounded-tr-[50px]">
                <TouchableOpacity 
                    className="bg-black rounded-full flex-row items-center justify-center p-3"
                    onPress={() => navigation.navigate('product', { screen: "payment"})}
                >
                    <Text className="text-white font-bold text-sm mr-1">Continue to payment</Text>
                    <MaterialCommunityIcons name="arrow-right-thin" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
  )
}