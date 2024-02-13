import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppMabView from './AppMabView.jsx'
import Header from './Header.jsx'
import Colors from '../../Utils/Colors.js'
import SearchBar from './SearchBar.jsx'

export default function HomeScreen() {
  return (
      <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar/>
      </View>
      <AppMabView/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex: 10,
    padding:10,
    width:'100%',
    paddingHorizontal:20,
    
  }
})