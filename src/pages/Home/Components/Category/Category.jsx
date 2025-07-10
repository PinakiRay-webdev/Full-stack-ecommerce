import React from "react";
import { categories } from "../../../../utils/utils";
const Category = () => {
  return (
    <div className="py-8 px-6 sm:px-8 md:px-16 lg:px-44">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12" >
        {categories?.map((cat, id) => (
          <div key={id} className="bg-black min-w-[10rem] w-full h-32 cursor-pointer overflow-hidden">
            <img className="w-full h-full object-cover transition-all ease-in-out duration-150 hover:scale-125" src={cat.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
