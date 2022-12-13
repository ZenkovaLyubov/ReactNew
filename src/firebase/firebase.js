import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBy9FJ8V-v4fNwsIHSc7bLlOM80zRtwbAc',
  authDomain: 'lzenkova.firebaseapp.com',
  projectId: 'lzenkova',
  storageBucket: 'lzenkova.appspot.com',
  messagingSenderId: '328082862696',
  appId: '1:328082862696:web:327bbc7603d95778fb81dd',
}

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const auth = getAuth(app)
