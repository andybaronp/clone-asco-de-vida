import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

// // ALTA
// addDoc(collection(db, "persons"), { name });

// CONSULTA

export const getData = async () => await getDocs(collection(db, "posts"));
export const getDataPost = async () => await query(collection(db, "posts"));

// // REMOVE
// await deleteDoc(doc(db, "persons", id));

// // UPDATE
// await updateDoc(doc(db, "persons", id), { name });
