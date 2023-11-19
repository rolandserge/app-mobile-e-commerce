import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailProductScreen from '../../screens/product/detailProduct'
import ProductScreen from '../../screens/product/index'
import BasketScreen from '../../screens/checkout/basket'
import { TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
import OrderScreen from '../../screens/checkout/order'
import PaymentScreen from '../../screens/checkout/payment'

export default function ProductStack() {

    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()

    return (
        <Stack.Navigator>
            <Stack.Screen name='product home' component={ProductScreen} options={{ headerShown: false}} />
            <Stack.Screen name='Detail product' component={DetailProductScreen} options={{ headerShown: false }} />
            <Stack.Screen 
                name='basket' 
                component={BasketScreen} 
                options={{
                    headerTitle: "Checkout",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerRight: () => (
                        <TouchableOpacity className="mr-3">
                            <EvilIcons name="search" size={30} color="black" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity 
                            className="ml-3 p-2 bg-white rounded-xl border border-gray-300"
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={20} color="black" />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen 
                name='order' 
                component={OrderScreen} 
                options={({navigation}) => ({
                    headerTitle: 'Order Info',
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerLeft: () => (
                        <TouchableOpacity className="ml-2">
                            <Ionicons name="menu-outline" size={30} color="black" />
                        </TouchableOpacity>
                    ),
                })}  
            />
            <Stack.Screen
                name='payment'
                component={PaymentScreen}
                options={(navigation) => ({
                    headerTitle: "Payment",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerRight: () => (
                        <TouchableOpacity className="mr-3">
                            <EvilIcons name="search" size={30} color="black" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity 
                            className="ml-3 p-2 bg-white rounded-xl border border-gray-300"
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="left" size={20} color="black" />
                        </TouchableOpacity>
                    )
                })}
            />
        </Stack.Navigator>
    )
}