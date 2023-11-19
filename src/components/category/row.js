import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function CategoryRow() {



  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-2"
      >
          <TouchableOpacity className="bg-gray-100 p-3 rounded-full mr-3">
              <Text>T-shirt</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-3 rounded-full mr-3">
              <Text>Jockets</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-3 rounded-full mr-3">
              <Text className="text-gray-500">Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-3 rounded-full mr-3">
              <Text>Pants</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-3 rounded-full mr-3">
              <Text>Suts</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-3 rounded-full mr-3">
              <Text>Cheap</Text>
          </TouchableOpacity>
      </ScrollView>
      <View>
          <Image
            source={
              require('../../../assets/v5.jpg')
            }
            className="w-full h-52 rounded-xl"
          />
      </View>
    </View>
  )
}