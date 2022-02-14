import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";

// // ALTA
// addDoc(collection(db, "persons"), { name });

// CONSULTA

export const getData = async () => await getDocs(collection(db, "posts"));
export const getDataPost = async () => await query(collection(db, "posts"));

export const useApi = () => {
  const [data, setData] = useState({ isLoading: true, data: [] });

  const consulta = async (category) => {
    const q = query(collection(db, "posts"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const { post, name, createdAt } = doc.data();
      data.push({
        id: doc.id,
        post,
        name,
        createdAt,
      });
      setData({ data, isLoading: false });
    });
  };
  console.log(data);
  return { data, consulta };
};
// // REMOVE
// await deleteDoc(doc(db, "persons", id));

// // UPDATE
// await updateDoc(doc(db, "persons", id), { name });

// const useApi = () => {
//   const [data, setData] = useState({});

// const getDataPosts = async () => {
//   //getdata firebase
//   const posts = await getDataPost();

//   onSnapshot(posts, (querySnapshot) => {
//     setData(
//       querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }))
//     );
//   });
// };

// useEffect(() => {
//   getDataPosts();
// }, []);
// }

// export default useApi
