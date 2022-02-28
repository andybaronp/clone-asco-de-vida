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
      className="flex flex-col p-2 m-3 text-black bg-white border border-solid rounded-md "
    >
      <div className="text-xs text-right ">
        Publicado por:
        <span className="mr-1 capitalize"> {data.name}</span>
        <span className="mr-1">
          {data.createdAt.toDate().toLocaleDateString()}
        </span>
        Categoria:
        <span
          onClick={() => handleCategory(data.category)}
          className="px-2 py-1 text-sm text-orange-500 cursor-pointer  hover:bg-gray-200 hover:text-gray-900"
        >
          {data.category}
        </span>
      </div>
      <p className="p-2 leading-6 ">{data.post}</p>
    </div>
  );
};

export default Post;
