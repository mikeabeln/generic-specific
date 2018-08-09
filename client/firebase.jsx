import firebase from 'firebase/app'
import 'firebase/auth'

export const config = {
    apiKey: 'AIzaSyDET_geKH87n5W0yA6EDQzvl4_2pFAS4mA',
    authDomain: 'generic-specific.firebaseapp.com',
    databaseURL: 'https://generic-specific.firebaseio.com',
    projectId: 'generic-specific',
    storageBucket: 'generic-specific.appspot.com',
    messagingSenderId: '461325237357'
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
