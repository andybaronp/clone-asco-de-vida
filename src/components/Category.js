import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const Category = () => {
  const { category } = useParams();

  const [data, setData] = useState({ data: [], isLoading: true });
  const consulta = async (category) => {
    const q = query(collection(db, "posts"), where("category", "==", category));

    const querySnapshot = await getDocs(q);
    const newers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData({ data: newers, isLoading: false });
  };

  useEffect(() => {
    const getDataPosts = async () => {
      return await consulta(category);
    };
    getDataPosts();
    setData({ ...data, isLoading: false });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (data.isLoading) return <div className="text-center">Cargando...</div>;

  return (
    <div className="p-4">
      {data.data.map((post) => (
        <div
          className="m-3 border-solid   border bg-white p-4 rounded-md w-full text-black  "
          key={post.id}
        >
          <div className="text-right pb-2 text">
            Publicado por:
            <span className="capitalize"> {post.name} </span> / Categoria:
            <span className="ml-2 capitalize"> {post.category} </span>
          </div>
          <p className="leading-6	">{post.post}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
