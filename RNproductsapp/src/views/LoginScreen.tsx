import React, { useContext } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';


interface Props extends NativeStackScreenProps<any, any> {}


export const LoginScreen = ({ navigation }:Props) => {

  const { signIn } = useContext(AuthContext)

  const { correo, password, onChange } = useForm({
    correo:'',
    password: ''
  })

  const onLogin = () => {
    Keyboard.dismiss()
    signIn({correo: correo, password})
  }

  return (
    <>
       <View style={{backgroundColor:'#D98018', height:1200, width:1000, position:'absolute'}}></View>
       <Background />

       <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
       >
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
          onChangeText={ value => onChange(value,'correo')}
          value={correo}
          autoCapitalize="none"
          autoCorrect={ false }
          onSubmitEditing={ onLogin }
        />

        <Text style={ loginStyles.label }>Password</Text>
        <TextInput 
          placeholder="******"
          placeholderTextColor="rgba(255,255,255,.4)"
          underlineColorAndroid="white"
          style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
          selectionColor='white'
          onChangeText={ value => onChange(value,'password')}
          value={password}
          onSubmitEditing={ onLogin }
          secureTextEntry
        />
        <View style={loginStyles.btnContainer }>
          <TouchableOpacity
          activeOpacity={ 0.8 }
          style={ loginStyles.btn }
          onPress={ onLogin }
          >
            <Text style={loginStyles.btnText}>Login</Text>
          </TouchableOpacity>
          </View>
          <View style={loginStyles.newUserContainer }>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              onPress={ () => navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyles.btnText}>Nueva cuenta</Text>
            </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
