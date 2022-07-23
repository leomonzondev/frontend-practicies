import { StyleSheet } from "react-native";


export const loginStyles = StyleSheet.create({
    formContainer: {
        flex:1,
        paddingHorizontal:30,
        justifyContent:'center',
        height:600,
        marginBottom: 50,
        
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginTop:20,
        
    },
    label: {
        marginTop:25,
        color:'white',
        fontWeight:'bold',
    },
    inputField: {
        color:'white',
        fontSize:20,

    },
    inputFieldIOS:{
        borderBottomColor:'whithe',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    btnContainer: {
        alignItems:'center',
        marginTop:50
    },
    btn: {
        borderWidth:2,
        borderColor:'white',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:100
    },
    btnText:{
        fontSize:18,
        color:'white'
    },
    newUserContainer: {
        alignSelf:'flex-end',
        marginTop:10
    }
})