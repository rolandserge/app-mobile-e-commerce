import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../../../assets/data/product'
import SavedRow from '../../components/saved/row'
import { Ionicons } from '@expo/vector-icons';

export default function SavedScreen() {
  
  return (
    <View className="bg-white p-5">
      <FlatList
        data={products}
        renderItem={({item}) => <SavedRow product={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View className="items-center justify-center py-3">
              <TouchableOpacity className="w-12 items-center justify-center bg-red-600 h-12 rounded-full">
                <Ionicons name="md-close-outline" size={24} color="white" />
              </TouchableOpacity>
          </View>
        }
      />
    </View>
  )
}