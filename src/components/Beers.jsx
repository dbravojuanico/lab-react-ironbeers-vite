import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [allBeers, setAllBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      if (response.status === 200) {
        const parsed = await response.json();
        setAllBeers(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      <h1>All Beers</h1>
      {allBeers.map((oneBeer) => (
        <div className="beerCard" key={oneBeer.id}>
          <img src={oneBeer.image_url} />
          <Link to={`/beers/${oneBeer._id}`}>
            {console.log(oneBeer._id)}
            <h3>{oneBeer.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Beers;
