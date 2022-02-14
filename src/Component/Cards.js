import React, { useState } from "react";
import CatDescription from "./CatDescription";

const Cards = (props) => {
  const [schaw, setschaw] = useState(false);
  return (
    <div className="card">
      <h1>{props.cat.race}</h1>
      <h3> {props.cat.region}</h3>
      <h3> {props.cat.poids} </h3>
      <h3> {props.cat.tete} </h3>
      <h3> {props.cat.yeux} </h3>
      <img src={props.cat.images} />
      <button onClick={() => setschaw(!schaw)}>description</button>
      {schaw ? (
        <CatDescription schaw={schaw} setschaw={setschaw} cat={props.cat} />
      ) : null}
    </div>
  );
};
export default Cards;
