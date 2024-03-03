
import React from "react";
import  camera from "../../assets/camera.jpg"
import  home from "../../assets/home.jpg"
import  lipstick from "../../assets/lipstick.jpg"
import  smartwatch from "../../assets/smartwatch.jpg"
const Category = () => {
  const categories:any = [
    {
      img: camera,
      name: "electronics",
      id: 1,
    },
    {
      img: home,
      name: "jewelry",
      id: 2,
    },
    {
      img: lipstick,
      name: "men's clothing",
      id: 3,
    },
    {
      img: smartwatch,
      name: "women's clothing",
      id: 4,
    },
  ];

  return (
    <div className="pt-5 container">
      <h3 className="py-2">Shop by Category</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories &&categories.map((Category) => (
            
          <div key={Category.id} className="relative">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-md"
              style={{ backgroundImage: `url(${Category.img})` }}
            >
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg"></div>
              <h5 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold px-3">
                {Category.name.toUpperCase()}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
