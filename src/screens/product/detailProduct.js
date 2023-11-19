import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

const size = [
    {
        id: 1,
        size: "S",
        active: false
    },
    {
        id: 2,
        size: "M",
        active: true
    },
    {
        id: 3,
        size: "L",
        active: false
    },
    {
        id: 4,
        size: "XL",
        active: false
    },
    {
        id: 5,
        size: "XXL",
        active: false
    }
]

export default function DetailProductScreen() {

    const navigation = useNavigation()

    const { params } = useRoute()


    return (
        <>
            <ScrollView className='bg-white'>
                <View>
                    <View className='rounded-3xl relative h-96 overflow-hidden'>
                        <ImageBackground
                            source={params.image}
                            className="w-full h-full"
                        >   
                            <View className="flex-row absolute top-14 w-full justify-between px-6">
                                <TouchableOpacity 
                                    className="p-3 bg-white rounded-xl"
                                    onPress={() => navigation.goBack()}
                                >
                                    <AntDesign name="left" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity className="p-3 bg-white rounded-lg">
                                    <SimpleLineIcons name="basket" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View className="bg-white absolute left-7 bottom-20 p-1 rounded-full">
                                <TouchableOpacity className="w-5 h-5 my-1 rounded-full border border-gray-500"></TouchableOpacity>
                                <TouchableOpacity className="w-5 h-5 my-1 rounded-full bg-violet-950"></TouchableOpacity>
                                <TouchableOpacity className="w-5 h-5 my-1 rounded-full bg-black"></TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>

                    <View className="p-5">
                        <Text className="font-extrabold text-3xl">{params.name}</Text>
                        <View className="flex-row items-center">
                            <Text className="flex-1 font-bold text-xl">{params.price} FCFA</Text>
                            <View className="mr-auto flex-row items-center space-x-3">
                                <TouchableOpacity className="bg-gray-200 px-3 py-1 rounded-md">
                                    <Text className="font-bold text-xl">-</Text>
                                </TouchableOpacity>
                                <Text className="font-bold text-xl">01</Text>
                                <TouchableOpacity className="px-3 py-1 bg-gray-200 rounded-md">
                                    <Text className="text-xl font-bold">+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex-row items-center space-x-2 my-2">
                            <Ionicons name="star" size={24} color="black" />
                            <Text className="text-gray-500">4.8 Starts ||</Text>
                            <Text className="p-1 rounded-md bg-gray-100">3.447 vots</Text>
                        </View>
                        <View className="my-5">
                            <Text className="text-xl font-extrabold">Size</Text>
                            <View className="flex-row space-x-5">
                                {
                                    size.map((taille, index) => (
                                        <TouchableOpacity key={index} className={`border border-gray-300 h-12 w-12 rounded-full items-center justify-center ${taille.active && "bg-black border-0"}`}>
                                            <Text className={`text-lg font-bold ${taille.active && "text-white"}`}>{taille.size}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                        <View>
                            <Text className="text-xl font-extrabold">Description</Text>
                            <Text className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolor.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id explicabo 
                                placeat aut ad fugiat et eveniet tempora optio. Adipisci!
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View className='absolute bottom-4 w-full flex-row items-center px-6 space-x-5'>
                <TouchableOpacity className="border p-3 border-gray-300 rounded-lg">
                    <Ionicons name="save-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex-1 p-4 rounded-lg pr-2 bg-black"
                    onPress={() => navigation.navigate('product', { screen: "basket"})}
                >
                    <Text className="text-white text-center font-bold">Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </>
  )
}