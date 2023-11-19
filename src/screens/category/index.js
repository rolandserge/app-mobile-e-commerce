import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import CategoryCard from '../../components/category'
import { category } from '../../../assets/data/category'


export default function CategoryScreen() {
  
  return (
    <SafeAreaView className="bg-white">
      <View className="m-5">
        <FlatList
          data={category}
          renderItem={({item}) => <CategoryCard categorie={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 10}}
          contentContainerStyle={{ gap: 16}}
        />
      </View>
    </SafeAreaView>
  )
}