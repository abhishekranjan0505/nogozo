import React from "react";
import classes from "./HomePage.module.css";
import diwaliImg from "../../assets/HomePage/diwali.png";

const homePage = () => {
  const categories = [
    { id: 1, img: diwaliImg, title: "Diwali Special" },
    { id: 2, img: diwaliImg, title: "Groceries & Essentials" },
    { id: 3, img: diwaliImg, title: "Food Outlets & Restaurants" },
    { id: 4, img: diwaliImg, title: "Fruits & Veggies" },
    { id: 5, img: diwaliImg, title: "Dairy Products" },
    { id: 6, img: diwaliImg, title: "Craft & Art" },
    { id: 7, img: diwaliImg, title: "Stationary & Books" },
    { id: 8, img: diwaliImg, title: "Fashion & Personal Care" },
  ];

  return (
    <div className={classes.Root}>
      <div className={classes.Categories}>
        {categories.map((category) => {
          return (
            <div key={category.id} className={classes.CategoryCard}>
                <div className={classes.CategoryCardContent}>
              <img src={category.img} alt="" />
              <p>{category.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default homePage;
