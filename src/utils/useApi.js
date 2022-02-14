import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

// // ALTA
// addDoc(collection(db, "persons"), { name });

// CONSULTA

export const getData = async () => await getDocs(collection(db, "posts"));
export const getDataPost = async () => await query(collection(db, "posts"));
