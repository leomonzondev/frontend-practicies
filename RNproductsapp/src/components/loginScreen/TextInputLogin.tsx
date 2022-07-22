import React from 'react'
import { Platform, TextInput } from 'react-native'
import { loginStyles } from '../../theme/loginTheme'


type Props = {
    placeholder:string;
    type:string
}

export const TextInputLogin = ({placeholder, type,...otherProps}:Props) => {
  return (
    <TextInput 
    placeholder="Ingrese su email"
    placeholderTextColor="rgba(255,255,255,.4)"
    keyboardType={`${type}`}
    underlineColorAndroid="white"
    style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
    selectionColor='white'
    //Onchange, value
    autoCapitalize="none"
    autoCorrect={ false }
   />
   
  )
}
