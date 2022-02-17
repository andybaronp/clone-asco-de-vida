import { useNavigate } from "react-router";

const categorys = [
  "varios",
  "amor",
  "amistad",
  "picante",
  "trabajo",
  "familia",
];
const TagsCategorys = () => {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    navigate(`/category/${category}`);
  };
  return (
    <div className="text-white   flex flex-col  p-4 ">
      <div className="font-semibold mb-3 self-center  border-b-4 border-orange-500 ">
        TagsCategorys
      </div>
      <ul className="flex gap-3  font-light flex-wrap">
        {categorys.map((category) => (
          <li
            onClick={() => handleCategory(category)}
            key={category}
            className="inline-block cursor-pointer bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800  mr-2 mb-2 before:content-['#'] italic "
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsCategorys;
