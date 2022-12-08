import { collection, getDocs, addDoc } from 'firebase/firestore'
import { firestore } from './firebase'

export const addPost = async (data) => {
  const result = addDoc(collection(firestore, 'posts'), data)
}

export const getAllPosts = async () => {
  const response = await getDocs(collection(firestore, 'posts'))
  const arr = response.docs.map((e) => e.data())
  return arr
}

export const addChatFB = async (data) => {
  const result = addDoc(collection(firestore, 'chats'), data)
}

export const getAllChats = async () => {
  const response = await getDocs(collection(firestore, 'chats'))
  const arr = response.docs.map((e) => e.data())
  return arr
}

export const addMessagesFB = async (data) => {
  const result = addDoc(collection(firestore, 'messages'), data)
}

export const getAllMessages = async () => {
  const response = await getDocs(collection(firestore, 'messages'))
  const arr = response.docs.map((e) => e.data())
  return arr
}
