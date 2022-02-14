import React from "react";
const categorys = [
  "varios",
  "amor",
  "amistad",
  "picante",
  "trabajo",
  "familia",
];
const TagsCategorys = () => {
  return (
    <div className="text-white w-48   p-4 m-3">
      <div>TagsCategorys</div>
      <ul className="flex flex-row flex-wrap">
        {categorys.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagsCategorys;
