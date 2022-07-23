import React from 'react'
import { Button, Platform, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme';

export const LoginScreen = () => {

  return (
    <>
       <View style={{backgroundColor:'#D98018', height:1200, width:1000, position:'absolute'}}></View>
       <Background />
      
       <View style={ loginStyles.formContainer}>

      
       <WhiteLogo />
       <Text style={ loginStyles.title }>Login</Text>
       <Text style={ loginStyles.label }>Email</Text>
       <TextInput 
        placeholder="Ingrese su email"
        placeholderTextColor="rgba(255,255,255,.4)"
        keyboardType="email-address"
        underlineColorAndroid="white"
        style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
        selectionColor='white'
        //Onchange, value
        autoCapitalize="none"
        autoCorrect={ false }
       />

      <Text style={ loginStyles.label }>Password</Text>
       <TextInput 
        placeholder="******"
        placeholderTextColor="rgba(255,255,255,.4)"
        underlineColorAndroid="white"
        style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
        selectionColor='white'
        //Onchange, value
       />
      <View style={loginStyles.btnContainer }>
        <TouchableOpacity
        activeOpacity={ 0.8 }
        style={ loginStyles.btn }
        >
          <Text style={loginStyles.btnText}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={loginStyles.newUserContainer }>
          <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => console.log('press')}
          >
            <Text style={loginStyles.btnText}>Nueva cuenta</Text>
          </TouchableOpacity>
      </View>
      </View>
    </>
  )
}
