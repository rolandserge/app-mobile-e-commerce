import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "../../screens/category";
import SavedScreen from "../../screens/saved/index";
import UserScreen from "../../screens/user";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import ProductStack from "../stack/productStack";
import HomeScreen from "../../screens/home";
import { TouchableOpacity, View } from "react-native"

export default function RouterBottom() {
  
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff8000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity className="ml-5">
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row space-x-4 items-center mr-5">
                <TouchableOpacity>
                  <EvilIcons name="search" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("product", { screen: "basket" })}>
                  <SimpleLineIcons name="basket" size={24} color="black" />
                </TouchableOpacity>
            </View>
          ),
          headerTitle: ""
        })}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={() => ({
          tabBarLabel: "Category",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity className="ml-5">
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="flex-row space-x-4 items-center mr-5">
                <TouchableOpacity>
                  <EvilIcons name="search" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SimpleLineIcons name="basket" size={24} color="black" />
                </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: "bold"
          }
        })}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={() => ({
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-save-outline" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity className="ml-5">
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View className="mr-5">
                <TouchableOpacity>
                  <SimpleLineIcons name="basket" size={24} color="black" />
                </TouchableOpacity>
            </View>
          ),
          headerTitle: "Saved",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTitleAlign: "center"
        })}
      />
      <Tab.Screen
        name="Me"
        component={UserScreen}
        options={() => ({
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

// 07 59 84