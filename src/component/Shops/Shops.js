import React from "react";
import classes from "./Shops.module.css";
import addressSvg from "../../assets/Shops/address.svg";

const shopsPage = () => {
  const shops = [
    {
      id: 1,
      name: "Shivam Zari Center",
      address: "38 B, Tulsi Bagh, Dayal Bagh",
      status: "OPEN",
      type: "Home Business",
    },
    {
      id: 2,
      name: "Koms n cakes",
      address: "200, Jaipur House, Agra",
      status: "OPEN",
      type: "Home Business",
    },
    {
      id: 3,
      name: "Crafty_sides",
      address: "45, Janta Colony, Shahganj",
      status: "OPEN",
      type: "Home Business",
    },
    {
      id: 4,
      name: "Laxmi Shringar",
      address: "NaglaPati, New Agra",
      status: "OPEN",
      type: "",
    },
    {
      id: 5,
      name: "Machla Ji ke Diye",
      address: "NaglaPati Agra",
      status: "OPEN",
      type: "Home Business",
    },
  ];

  return (
    <div className={classes.Root}>
        {shops.map((shop) => {
          return (
            <div key={shop.id} className={classes.ShopCard}>
              <div className={classes.ShopCardContent}>
                <p className={classes.ShopName}>{shop.name}</p>
                <div className={classes.ShopAddress}>
                  <img src={addressSvg} alt="" />
                  <p>{shop.address}</p>
                </div>
                <div className={classes.ShopStatus}>
                  <p>{shop.status}</p>
                  <p> {shop.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default shopsPage;
