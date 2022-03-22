import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ6tdShyEdtuEpZw_hHThroDMoXLyg4f0",
  authDomain: "gushcha-jscourse-tms.firebaseapp.com",
  projectId: "gushcha-jscourse-tms",
  storageBucket: "gushcha-jscourse-tms.appspot.com",
  messagingSenderId: "457010454944",
  appId: "1:457010454944:web:bfdca859edb8a03a1c44c5",
};

firebase.initializeApp(firebaseConfig); //инициализация
export const database = firebase.database; //импортируем дату из firebase
export const auth = firebase.auth(); //поддерживает аутентификацию с использованием паролей, телефонных номеров и тп
export default firebase;
