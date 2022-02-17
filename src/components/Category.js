import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Post from "./Post";
import TagsCategorys from "./TagsCategorys";
const Category = () => {
  const { category } = useParams();

  const [data, setData] = useState({ data: [], isLoading: true });
  const getData = async (category) => {
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
      return await getData(category);
    };
    getDataPosts();
    setData({ ...data, isLoading: false });
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex  flex-col  sm:flex-row">
      <main className=" flex justify-center ">
        <div className=" sm:w-4/5">
          {data.data.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>
      <section className="w-full">
        <TagsCategorys />
      </section>
    </div>
  );
};

export default Category;
