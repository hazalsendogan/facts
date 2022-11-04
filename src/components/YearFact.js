import React, { useState, useEffect } from "react";

export default function YearFact({ yearFacts }) {
  const [facts, setFacts] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6b80b27156msh4efa2bf0aae678ep1fba61jsnad59c6cb998a",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      `https://numbersapi.p.rapidapi.com/${yearFacts}/year?fragment=true&json=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [facts]);

  return (
    <div>
      <p>{facts.text}</p>
    </div>
  );
}
