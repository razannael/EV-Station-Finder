import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors.js';
import SearchBar from './SearchBar.jsx';
export default function Header() {
    const {user} = useUser();
  return (
    <View 
    style={{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin:0,
        backgroundColor: Colors.TRANSP
        ,padding:6
    }}
    >
      <Image source={{
        uri:user?.imageUrl}}
        style={{width:40, height:40 , borderRadius:99 }}
        />
        <FontAwesome name="filter" size={30} color="black" />
    </View>
  )
}