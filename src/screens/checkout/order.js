import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../../../assets/data/product'
import SavedRow from '../../components/saved/row'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrderScreen() {

    const navigation = useNavigation()

    return (
        <>
           <ScrollView 
                className='bg-white px-5 pt-5'
                showsVerticalScrollIndicator={false}
            >
                <View className='pb-8'>
                    {
                        products.map((product, index) => (
                            <SavedRow product={product} key={index} />
                        ))
                    }
                </View>
           </ScrollView>
           <SafeAreaView className="bg-white">
                <View className="rounded-tl-[50px] border border-gray-200 p-6 rounded-tr-[50px]">
                    <View className='flex-row justify-between border-b border-gray-200 py-2'>
                        <Text className='text-gray-400'>SubTotal</Text>
                        <Text className='text-gray-400'>1 000 000 FCFA</Text>
                    </View>
                    <View className="flex-row justify-between border-b border-gray-200 py-2">
                        <Text className='text-gray-400'>Shipping</Text>
                        <Text className='text-gray-400'>1 000 FCFA</Text>
                    </View>
                    <View className="flex-row justify-between border-b border-gray-200 py-2">
                        <Text>Total</Text>
                        <Text className="font-extrabold">1 001 000 FCFA</Text>
                    </View>

                    <TouchableOpacity 
                        className="bg-black rounded-full flex-row items-center justify-center p-3 mt-8"
                    // onPress={() => navigation.navigate('product', { screen: "order"})}
                    >
                        <Text className="text-white font-bold text-sm mr-1">Confirm Order</Text>
                        <MaterialCommunityIcons name="arrow-right-thin" size={24} color="white" />
                    </TouchableOpacity>
                </View>
           </SafeAreaView>
        </>
  )
}