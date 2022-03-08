import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase'

export const getData = async () => await getDocs(collection(db, 'posts'))
export const getDataPost = () => query(collection(db, 'posts'))
