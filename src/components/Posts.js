import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataPost } from "../utils/useApi";
const Posts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  //loading
  const getDataPosts = async () => {
    //getdata firebase
    const posts = await getDataPost();

    onSnapshot(posts, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  console.log(data);
  useEffect(() => {
    getDataPosts();
  }, []);

  const handleCategory = (category) => {
    navigate(`/category/${category}`);
  };
  return (
    <div className=" p-4 ">
      {data.length > 0
        ? data.map((post) => (
            <div
              key={post.id}
              className=" flex flex-col align-middle md:h-44 sm:h-64 w-full h-72 m-3 border-solid  border bg-white p-3 rounded-md  text-black "
            >
              <div className="text-right text-xs pb-2 text">
                Publicado por:
                <span className="capitalize mr-1"> {post.data.name}</span>
                <span className="mr-1">
                  {post.data.createdAt.toDate().toLocaleDateString()}
                </span>
                Categoria:
                <span
                  onClick={() => handleCategory(post.data.category)}
                  className="  cursor-pointer   px-2 py-1 text-sm text-orange-500   hover:bg-gray-200 hover:text-gray-900"
                >
                  {post.data.category}
                </span>
              </div>
              <p className="  min-h-full leading-6	p-2">{post.data.post}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Posts;
