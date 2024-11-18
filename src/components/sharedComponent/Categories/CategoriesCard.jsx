import React from "react";

const CategoriesCard = ({img,category}) => {
  return (
            <div className="flex flex-col justify-center items-center rounded-md">
      <div className="bg-[#EFF9F8] p-2 shadow-xl w-56 h-32 flex justify-center items-center">
          <img
        src={img}
alt={category} className="bg-transparent h-24 w-40"
          />
      </div>
      <p>{category}</p>
    </div>
  );
};

export default CategoriesCard;
