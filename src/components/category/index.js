import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function CategoryCard({categorie}) {

  return (
    <TouchableOpacity
        className="h-56 w-[48%] overflow-hidden rounded-xl"
    >
      <ImageBackground
        source={categorie.image}
        className="w-full h-full items-center justify-center"
      >
        <Text className="text-white text-2xl font-bold">{categorie.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}