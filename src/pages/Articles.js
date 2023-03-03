import React from "react";
import { useState, useEffect } from "react";
import ArticleCard from "../components/cards/ArticleCard";

const Articles = () => {
  const [showData, setShowData] = useState([]);
  const [query, setQuery] = useState("");
  console.log(query);

  async function showInfo() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    setShowData(data);
  }

  const showCountry = showData
    .filter((country) => country.name.common.includes(query))
    .map((country) => {
      return (
        <>
          <ArticleCard
            name={country.name.common}
            flag={country.flags.svg}
            continent={country.continents}
            population={country.population}
            lang={country.languages}
            key={country.name.official}
          />
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
          onKeyDown={(e) => setQuery(e.target.value)}
          placeholder="Search country"
        />
      </nav>
      <section>{showCountry}</section>
    </main>
  );
};
export default Articles;

//   const showCountry = showData.map((country) => {
//     return (
//       <>
//         <ArticleCard
//           name={country.name.common}
//           flag={country.flags.svg}
//           continent={country.continents}
//           population={country.population}
//           key={country.name.common}
//           lang={country.languages}
//         />
//       </>
//     );
//   });

//   useEffect(() => {
//     showInfo();
//   }, []);
//   return <section>{showCountry}</section>;
// };
// export default Articles;
