import React from "react";
const CatDescription = ({ cat, schaw, setschaw }) => {
  return (
    <div className="desc">
      <h1>{cat.race}</h1>
      <img src={cat.images} />
      <p>{cat.description}</p>
      <button onClick={() => setschaw(!schaw)}>X</button>
    </div>
  );
};

export default CatDescription;
