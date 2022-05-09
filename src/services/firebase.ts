import { initializeApp, FirebaseApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Auth, getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_APP_ID } from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: "please-remind",
  storageBucket: "please-remind.appspot.com",
  messagingSenderId: "900210412075",
  appId: FIREBASE_APP_ID,
};

// let firebaseApp: FirebaseApp;
// let fireAuth: Auth;
// if (getApps().length < 1) {
//   firebaseApp = initializeApp(firebaseConfig);
//   fireAuth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// } else {
//   firebaseApp = getApp();
//   fireAuth = getAuth();
// }
// const db = getFirestore(firebaseApp);

// export default db;

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
