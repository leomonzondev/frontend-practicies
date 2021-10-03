// import { firebase, googleAuthProvider } from "../components/firebase/firebase-config"
import { types } from "../types/types"



// export const startGoogleLogin = () => {
//     return async ( dispatch ) => {
//         firebase.auth().signInWithPopup( googleAuthProvider)
//             .then((re)=>{
//                 console.log(re)
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//         }
// }


export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})