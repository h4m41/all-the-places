import React from "react";
import { useState, useEffect } from "react";
import ArticleCard from "../components/cards/ArticleCard";
import "./Articles.css";

const Articles = () => {
  const [showData, setShowData] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);

  async function showInfo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    setShowData(data);
  }

  const showCountry = showData
    .filter((country) => country.name.common.toLowerCase().includes(input))
    .map((country) => {
      return (
        <>
          {" "}
          {ArticleCard && (
            <ArticleCard
              name={country.name.common}
              flag={country.flags.svg}
              continent={country.continents}
              population={country.population}
              lang={country.languages}
              un={country.unMember}
              key={country.name.official}
            />
          )}
        </>
      );
    });

  useEffect(() => {
    return () => {
      showInfo();
    };
  }, []);

  return (
    <main>
      <nav>
        <input
          className="search-bar"
          type="text"
          onChange={(letter) => setInput(letter.target.value)}
          placeholder="Search Country"
        />
      </nav>
      <section>{showCountry}</section>
    </main>
  );
};
export default Articles;
