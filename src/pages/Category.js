import { useParams } from "react-router-dom";

const Category = () => {
  let data = JSON.parse(localStorage.getItem("posts")) || [];
  const { category } = useParams();

  return (
    <div className="p-4">
      {data
        .filter((post) => post.category === category)
        .map((post) => (
          <div
            className="m-3 border-solid  border bg-white p-4 rounded-md w-full text-black  "
            key={post.id}
          >
            <div className="text-right pb-2 text">
              Publicado por: <span className="capitalize"> {post.name} </span> /
              Categoria:
              <span className="ml-2 capitalize"> {post.category} </span>
            </div>
            <p className="leading-6	">{post.post}</p>
          </div>
        ))}
    </div>
  );
};

export default Category;
