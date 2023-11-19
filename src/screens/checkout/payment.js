import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const data = [
    { label: 'Card Credit', value: '1' },
    { label: 'Debit Card', value: '2' },
];

export default function PaymentScreen() {


    const [expiryDate, setExpiryDate] = useState('');
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation()


    const handleExpiryDateChange = (text) => {
        // Gérez la logique pour formater le texte comme "MM/YY" (par exemple, ajouter '/' automatiquement)
        if (text.length === 2 && expiryDate.length === 1) {
          text += '/';
        }
        if (text.length === 2 && expiryDate.length === 3) {
          text = text.slice(0, 1);
        }
    
        setExpiryDate(text);
    };

    return (
        <SafeAreaView className="bg-white p-5">
            <View className="mb-5 mt-3">
                <Dropdown
                    // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    className='px-5 py-2 bg-gray-200 rounded-full'
                    placeholderStyle={{}}
                    selectedTextStyle={{}}
                    iconStyle={{ tintColor: "blue" }}
                    data={data}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Votre moyen de payement' : '...'}
                    // searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
            </View>
            
            <View className="flex-row items-center justify-between my-3">
                <Text className="font-bold text-2xl">Add Credit Card</Text>
                <TouchableOpacity>
                    <Text className="underline text-md text-[#11a5ff]">Clear deta !</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TextInput
                    placeholder='Card Number'
                    className="bg-gray-200 rounded-full px-5 py-2 my-2"
                />
                <TextInput
                    placeholder='Cardholder Name'
                    className="bg-gray-200 rounded-full px-5 py-2 my-2"
                />
                <View className="flex-row justify-between my-2">
                    <TextInput
                        placeholder='MM/YY'
                        maxLength={5}
                        keyboardType="numeric"
                        value={expiryDate}
                        onChangeText={handleExpiryDateChange}
                        className="bg-gray-200 rounded-full w-[46%] px-5 py-2"
                    />
                    <TextInput
                        placeholder='CVV'
                        keyboardType='numeric'
                        maxLength={3}
                        className="bg-gray-200 rounded-full w-[46%] px-5 py-2"
                    />
                </View>
                <TouchableOpacity 
                    className="bg-[#11a5ff] my-2 rounded-full"
                    onPress={() => navigation.navigate('product', { screen: "order"})}
                >
                    <Text className="text-center py-4 font-bold text-white">+ Add</Text>
                </TouchableOpacity>
            </View>

            <View className="my-5">
                <Text className="font-bold text-2xl mb-2">Credit Card</Text>
                <View className='bg-[#9f8cb3] rounded-lg p-5'>
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="w-14 h-8">
                            <Image
                                source={
                                    require('../../../assets/puce.png')
                                }
                                className="w-full h-full"
                            />
                        </View>
                        <View className="w-20 h-10">
                            <Image
                                source={
                                    require('../../../assets/visa.png')
                                }
                                className="h-full w-full"
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                    <View className="flex-row space-x-3 py-3">
                        <Text className="text-white font-bold">****</Text>
                        <Text className="text-white font-bold">****</Text>
                        <Text className="text-white font-bold">****</Text>
                        <Text className="text-white text-2xl">2345</Text>
                    </View>
                    <View className="flex-row justify-between mt-5">
                        <View>
                            <Text className='text-gray-200'>Card holder name</Text>
                            <Text className="text-xl text-white">Serge-Roland</Text>
                        </View>
                        <View>
                            <Text className="text-gray-200">Expery Date</Text>
                            <Text className="text-xl text-white">02/30</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
  )
}