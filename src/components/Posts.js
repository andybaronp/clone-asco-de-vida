import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataPost } from "../utils/api";
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

  useEffect(() => {
    getDataPosts();
  }, []);

  const handleClick = (category) => {
    navigate("/category/" + category);
  };
  console.log(data);
  return (
    <div className="p-4">
      {data.length > 0
        ? data.map((post) => (
            <div className="m-3 border-solid  border bg-white p-4 rounded-md w-full text-black ">
              <div className="text-right pb-2 text">
                Publicado por:
                <span className="capitalize"> {post.data.name} </span> - /
                Categoria:
                <span
                  onClick={() => handleClick(post.data.category)}
                  className=" ml-2 cursor-pointer   border-solid border border-gray-400 rounded-md px-2 py-1 text-sm   hover:bg-gray-200 hover:text-gray-900"
                >
                  {post.data.category}
                </span>
              </div>
              <p className="leading-6	">{post.data.post}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Posts;
