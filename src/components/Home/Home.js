import React, { useEffect, useState } from "react";
import "./Home.css";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="home">
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </div>
  );
};

export default Home;
