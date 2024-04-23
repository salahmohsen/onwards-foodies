import React from "react";

const Meal = ({ params }) => {
  console.log(params);
  return (
    <div>
      <p>{params.mealSlug}</p>
    </div>
  );
};

export default Meal;
