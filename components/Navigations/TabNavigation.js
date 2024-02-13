import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screen/favoriteScreen/FavoriteScreen.jsx';
import ProfileScreen from '../screen/profileScreen/ProfileScreen.jsx';
import HomeScreen from '../screen/homeScreen/HomeScreen.jsx';
import Colors from '../Utils/Colors.js';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="home" component={HomeScreen} 
      options={{
        tabBarLabel: 'Search',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({color, size}) => (
          <AntDesign name="search1" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="favorite" component={FavoriteScreen}
       options={{
        tabBarLabel: 'Favorites',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({color, size}) => (
          <AntDesign name="heart" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} 
       options={{
        tabBarLabel: 'Profile',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="user-circle" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}