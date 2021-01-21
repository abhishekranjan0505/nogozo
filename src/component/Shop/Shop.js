import React, { useEffect, useState } from "react";
import classes from "./Shop.module.css";
import image from "../../assets/Shop/Items/image.jpeg";
import itemImage from "../../assets/Shop/Items/itemImage.jpeg";

const Shop = () => {
  const [itemCount, setItemCount] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [delCharges, setDelCharges] = useState(120);
  const [minDelPrice, setMinDelPrice] = useState(399);
  const [isDelivery, setIsDelivery] = useState(false);

  const items = [
    {
      id: 1,
      img: image,
      name: "6 Inch Color Mala",
      amount: "1 Piece",
      price: 20,
    },
    {
      id: 2,
      img: itemImage,
      name: "7 Inch Mala",
      amount: "1 Piece",
      price: 30,
    },
    {
      id: 3,
      img: image,
      name: "9 Inch Moti Mala",
      amount: "1 Piece",
      price: 50,
    },
    {
      id: 4,
      img: itemImage,
      name: "9.5 Inch Double Ladi Mala",
      amount: "1 Piece",
      price: 25,
    },
    {
      id: 5,
      img: image,
      name: "Choti Double Ladi Mala",
      amount: "1 Piece",
      price: 10,
    },
    {
      id: 6,
      img: itemImage,
      name: "Choti Mala - Golden White",
      amount: "1 Piece",
      price: 5,
    },
    {
      id: 7,
      img: image,
      name: "Choti White Mala",
      amount: "1 Piece",
      price: 5,
    },
    {
      id: 8,
      img: itemImage,
      name: "Flower Mala",
      amount: "1 Piece",
      price: 70,
    },
  ];

  useEffect(() => {
    if (minDelPrice <= 0) {
      setIsDelivery(true);
      setDelCharges(0);
    } else {
      setIsDelivery(false);
      setDelCharges(120);
    }
  }, [minDelPrice]);

  const itemCountIncrement = (index) => {
    let tempArr = [...itemCount];
    tempArr[index] = tempArr[index] + 1;
    setItemCount(tempArr);
    let tempMinDelPrice = minDelPrice;
    tempMinDelPrice = tempMinDelPrice - items[index].price;
    setMinDelPrice(tempMinDelPrice);
  };

  const itemCountDecrement = (index) => {
    let tempArr = [...itemCount];
    if (tempArr[index] > 0) {
      tempArr[index] = tempArr[index] - 1;
      setItemCount(tempArr);
      let tempMinDelPrice = minDelPrice;
      tempMinDelPrice = tempMinDelPrice + +items[index].price;
      setMinDelPrice(tempMinDelPrice);
    }
  };

  return (
    <div className={classes.Root}>
      <div className={classes.ShopIntro}>
        <h1>Shivam Zari Center</h1>
        <p>Address: 38 B, Tulsi Bagh, Dayal Bagh - 282005</p>
        <p className={classes.Phone}>
          Phone: 8534921418<span>Delivering</span>
        </p>
        {!isDelivery ? (
          <p>Order &#8377;{minDelPrice} to get free delivery</p>
        ) : (
          <p style={{ color: "green" }}>Free Delivery</p>
        )}
        <p>Delivery Charges: &#8377;{delCharges}</p>
        <a
          href="https://www.google.com/maps/search/38+B,+Tulsi+Bagh,+Dayal+Bagh+-+282005/@27.2379149,77.9708603,13z/data=!3m1!4b1"
          target="_blank"
          rel="noreferrer"
        >
          <button>CHECK LOCATION</button>
        </a>
      </div>
      <div className={classes.ShopCards}>
        {items.map((item, index) => {
          return (
            <div key={item.id} className={classes.ShopCard}>
              <img src={item.img} alt="" />
              <div className={classes.ShopCardContent}>
                <p>{item.name}</p>
                <div className={classes.Cart}>
                  <div className={classes.CartContent}>
                    <p>{item.amount}</p>
                    <p>&#8377;{item.price}</p>
                  </div>
                  <div className={classes.CartButton}>
                    <p>
                      <span onClick={() => itemCountDecrement(index)}>-</span>{" "}
                      {itemCount[index]}{" "}
                      <span onClick={() => itemCountIncrement(index)}>+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
