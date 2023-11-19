import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
// import { Formik } from 'formik';

export default function LoginScreen() {
  return (
    <SafeAreaView className="bg-white p-5">
        <Text className="text-center text-3xl my-3">Welcome</Text>

        <View>
            <TextInput
                placeholder=''
            />
        </View>
    </SafeAreaView>
  )
}