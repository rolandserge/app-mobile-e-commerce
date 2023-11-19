import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ProductRow(props) {
    
    const navigation = useNavigation()

    const { product } = props
 
    return (
        <TouchableOpacity 
            className="mb-5 w-[49%]"
            onPress={() => navigation.navigate('product', { screen: 'Detail product', params: product})}
        >
            <Image
                source={product.image}
                className="w-full h-44 rounded-xl"
            />
            <Text className="my-1 text-lg">{product.name}</Text>
            <Text className="text-lg font-extrabold text-orange-300">{product.price} FCFA</Text>
        </TouchableOpacity>

    )
}