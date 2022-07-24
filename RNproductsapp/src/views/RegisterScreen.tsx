import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/loginTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }:Props) => {


  const { email, password, name, onChange } = useForm({
    name:'',
    email:'',
    password: ''
  })

  const onRegister = () => {
    console.log({name, email,password});
    Keyboard.dismiss()
  }


  return (
    <>

       <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor:"#09111a"}}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
       >
        <View style={ loginStyles.formContainer}>
        
        <WhiteLogo />
        <Text style={ loginStyles.title }>Register</Text>

        <Text style={ loginStyles.label }>Name</Text>
        <TextInput 
          placeholder="Ingrese su name"
          placeholderTextColor="rgba(255,255,255,.4)"
          underlineColorAndroid="white"
          style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
          selectionColor='white'
          onChangeText={ value => onChange(value,'name')}
          value={name}
          autoCapitalize="words"
          onSubmitEditing={ onRegister }
        />


        <Text style={ loginStyles.label }>Email</Text>
        <TextInput 
          placeholder="Ingrese su email"
          placeholderTextColor="rgba(255,255,255,.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={ [loginStyles.inputField,(Platform.OS == 'ios') && loginStyles.inputFieldIOS] }
          selectionColor='white'
          onChangeText={ value => onChange(value,'email')}
          value={email}
          autoCapitalize="none"
          autoCorrect={ false }
          onSubmitEditing={ onRegister }
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
          onSubmitEditing={ onRegister }
          secureTextEntry
        />
        <View style={loginStyles.btnContainer }>
          <TouchableOpacity
          activeOpacity={ 0.8 }
          style={ loginStyles.btn }
          onPress={ onRegister }
          >
            <Text style={loginStyles.btnText}>Register</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.replace('LoginScreen')}
            activeOpacity={ 0.8}
            style={ loginStyles.btnReturn }
          >
            <Text style={ loginStyles.btnText }>Login</Text>
          </TouchableOpacity>



        </View>
      </KeyboardAvoidingView>
    </>
  )
}
