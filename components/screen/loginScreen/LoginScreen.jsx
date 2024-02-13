import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors.js'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from './../../../hooks/warmUpBrowser.tsx';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress= async()=>{
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }
  return (
    <View style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: 30
    }}>
      <Image source={require('./../../../assets/images/charging-station.png')}
      style={styles.bgImage}
      />
      <View>
        <Text
        style={styles.heading}
        >Your Ultimate EV Charging Station Finder App.</Text>
        <Text
        style={styles.desc}
        >Find EV Station Near You, Plan Trip and so much more just in one click.</Text>
        <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
          <Text style={{
            fontFamily: 'Outfit',
            color: Colors.WHITE
          }}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    logoImage :{
        width:500,
        height:100,
        objectFit:'contain'
    },
    bgImage:{
       width:300,
       height: 350,
       marginTop: 10,
       objectFit:'contain'
    },
    heading:{
      fontSize: 17,
      fontFamily:'Outfit-bold',
      textAlign: 'center',
      marginTop: 20
    }
    ,desc:{
      fontFamily:'Outfit',
      marginTop:30,
      textAlign: 'center',
      color: Colors.GRAY
    },
    button:{
      backgroundColor: Colors.PRIMARY,
      display: 'flex',
      borderRadius: 99,
      margin: 50,
      padding:15,
      alignItems:'center',
    }
})