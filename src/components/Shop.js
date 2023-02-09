import { useState, useEffect } from "react";

const Shop = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setWeapons(data.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(weapons);

  return (
    <>
      <h1>This is the Shop page</h1>
      <div>
        {weapons.map((weapon) => (
          <>
            <div key={weapon.uuid}>
              {weapon.displayName}
              <div>
                <img src={weapon.displayIcon}></img>
              </div>
              <div>{weapon.shopData && weapon.shopData.cost}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Shop;
