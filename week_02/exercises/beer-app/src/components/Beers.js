import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import SelectCountry from "./SelectCountry";

export default function Beers() {
  const [country, setCountry] = useState("italy");
  const [beers, setBeers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const countries = [
    { value: "italy", name: "Italy" },
    { value: "denmark", name: "Denmark" },
    { value: "belgium", name: "Belgium" },
    { value: "spain", name: "Spain" },
    { value: "portugal", name: "Portugal" },
    { value: "ireland", name: "Ireland" },
    { value: "luxembourg", name: "Luxembourg" },
    { value: "norway", name: "Norway" },
    { value: "finland", name: "Finland" },
    { value: "switzerland", name: "Switzerland" },
    { value: "czech", name: "Czech" },
    { value: "poland", name: "Poland" },
    { value: "malta", name: "Malta" },
  ];

  useEffect(() => {
    setLoading(true);
    setBeers([]);
    const url = "https://beers-list.p.rapidapi.com/beers/" + country;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_BEER_KEY,
        "X-RapidAPI-Host": "beers-list.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        setLoading(false);
      });
  }, [country]);

  return (
    <div>
      <SelectCountry
        countries={countries}
        setCountry={setCountry}
        country={country}
      />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          {beers.map((beer, i) => (
            <Beer key={`beer-${i}`} beer={beer} />
          ))}
        </>
      )}
    </div>
  );
}
