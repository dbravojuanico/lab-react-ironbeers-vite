import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function BeerDetails() {
  const { id } = useParams();
  const [thisBeer, setThisBeer] = useState();

  const fetchOneBeer = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      if (response.status === 200) {
        const parsed = await response.json();
        setThisBeer(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return thisBeer ? (
    <div>
      <h1>{thisBeer.name}</h1>
    </div>
  ) : (
    <p>loading info</p>
  );
}

export default BeerDetails;
