import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const { flag, name, capital, population } = country;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);

  return (
    <div className="country-details">
      <h3>country details</h3>
      <img src={flag} alt="" />
      <h4>Name : {name}</h4>
      <p>Capital : {capital}</p>
      <p>Population : {population}</p>
    </div>
  );
};

export default CountryDetails;
