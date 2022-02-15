import React from "react";
import { useNavigate } from "react-router";

const Post = ({ id, data }) => {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    navigate(`/category/${category}`);
  };
  return (
    <div
      key={id}
      className=" flex flex-col align-middle md:h-44 sm:h-64 w-full h-72 m-3 border-solid  border bg-white p-3 rounded-md  text-black "
    >
      <div className="text-right text-xs pb-2 text">
        Publicado por:
        <span className="capitalize mr-1"> {data.name}</span>
        <span className="mr-1">
          {data.createdAt.toDate().toLocaleDateString()}
        </span>
        Categoria:
        <span
          onClick={() => handleCategory(data.category)}
          className="  cursor-pointer   px-2 py-1 text-sm text-orange-500   hover:bg-gray-200 hover:text-gray-900"
        >
          {data.category}
        </span>
      </div>
      <p className="  min-h-full leading-6	p-2">{data.post}</p>
    </div>
  );
};

export default Post;
