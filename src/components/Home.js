import Posts from "./Posts";
import { Link } from "react-router-dom";
import TagsCategorys from "./TagsCategorys";

const Home = () => {
  return (
    <>
      <div>
        <Link
          to="/post"
          className=" bg-blue-500 hover:bg-blue-700 p-1 font-bold text-white focus:outline-none focus:shadow-outline border border-gray-400 rounded   w-full text-sm  
     "
        >
          Publicar
        </Link>
      </div>

      <div className="flex   ">
        <Posts />
        <TagsCategorys />
      </div>
    </>
  );
};

export default Home;
