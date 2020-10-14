import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBltOesyxHMATjwnilTbHGgsveEP_1tzYg",
    authDomain: "chatbox-app-d5452.firebaseapp.com",
    databaseURL: "https://chatbox-app-d5452.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base