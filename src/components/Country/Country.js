import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ country }) => {
  const { flag, name } = country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h4>{name}</h4>
      <Link to={`country/${name}`}>
        <button className="show-button">Show Details</button>
      </Link>
    </div>
  );
};

export default Country;
