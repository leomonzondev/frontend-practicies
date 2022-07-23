import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems:'center'
    }}>
        <Image source={require('../assets/zeniticon.png')}
        style={{
            width: 110,
            height: 100,
            
        }}/>
    </View>
  )
}
