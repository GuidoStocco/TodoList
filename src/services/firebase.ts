import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getReactNativePersistence } from "firebase/auth/react-native";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD55yU-Xg_tnojmmSsW9PxDOdzfNcnUn2g",
  authDomain: "todolist-8d073.firebaseapp.com",
  projectId: "todolist-8d073",
  storageBucket: "todolist-8d073.firebasestorage.app",
  messagingSenderId: "638541167954",
  appId: "1:638541167954:web:2e676440e921094be28e8b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);


export {db, auth} ;





// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// }
// )
