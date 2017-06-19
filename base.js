import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyANzbF9rVfPIOCqFoiX61_alWhupCR3wm8",
    authDomain: "noteherder-47567.firebaseapp.com",
    databaseURL: "https://noteherder-47567.firebaseio.com",
    projectId: "noteherder-47567",
    storageBucket: "noteherder-47567.appspot.com",
    messagingSenderId: "475436996173"
})

const db = database(app)

export default Rebase.createClass(db)