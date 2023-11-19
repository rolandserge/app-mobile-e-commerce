import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import CategoryRow from '../../components/category/row';
import ProductRow from '../../components/product';
import { products } from "../../../assets/data/product"


export default function HomeScreen() {


    return (
        <SafeAreaView className="bg-white px-5">
            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <View className="w-full flex-row items-center my-4 rounded-xl shadow-sm justify-between h-[20vh] bg-gray-100">
                    <View className="w-[38%] my-5 ml-4">
                        <Text className="font-extrabold text-3xl">30%</Text>
                        <Text className="font-bold text-lg">Today's Special !</Text>
                        <Text className='text-gray-400'>Get discount for every order, only valid for today</Text>
                    </View>
                    <View className="w-[58%]">
                        <Image
                            source={
                                require('../../../assets/veste.png')
                            }
                            className='h-full w-full'
                        />
                    </View>
                </View>

                <View className="mb-3">
                    <Text className="font-bold text-xl w-5/12">What are you looking for !</Text>
                </View>

                <View className="mb-5">
                    <CategoryRow />
                </View>

                <View className="mb-2">
                    <View className="flex-row mb-3">
                        <Text className="flex-1 font-bold text-xl">New Fashion</Text>
                        <TouchableOpacity className="mr-auto">
                            <Text className="font-bold text-lg text-blue-600 underline">See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row flex-wrap justify-between">
                        {
                            products.map((product, index) => (
                                <ProductRow product={product} key={index} />
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}