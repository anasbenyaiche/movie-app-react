import React from "react";
import Rating from "./rating.component";

 const RatingFilter = ({ change, count }) => {
  return (
    <div className="filer-rate">
      <p>Minimum rating</p>
      <Rating count={count} change={change} />
    </div>
  );
};
export default RatingFilter