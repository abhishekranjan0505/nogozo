import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Shop.module.css";

const Shop = (props) => {
  const [delCharges, setDelCharges] = useState(120);
  const [isDelivery, setIsDelivery] = useState(false);

  useEffect(() => {
    if (props.minDelPrice <= 0) {
      setIsDelivery(true);
      setDelCharges(0);
    } else {
      setIsDelivery(false);
      setDelCharges(120);
    }
  }, [props.minDelPrice]);

  return (
    <div className={classes.Root}>
      <div className={classes.ShopIntro}>
        <h1>Shivam Zari Center</h1>
        <p>Address: 38 B, Tulsi Bagh, Dayal Bagh - 282005</p>
        <p className={classes.Phone}>
          Phone: 8534921418<span>Delivering</span>
        </p>
        {!isDelivery ? (
          <p>Order &#8377;{props.minDelPrice} to get free delivery</p>
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
        {props.items.map((item, index) => {
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
                      <span onClick={() => props.itemCountDecrement(index)}>
                        -
                      </span>{" "}
                      {props.items[index].count}{" "}
                      <span onClick={() => props.itemCountIncrement(index)}>
                        +
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.ShopCart}>
        {props.totalPrice ? (
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <div className={classes.ShopCartContent}>
              <p>TOTAL PRICE: &#8377; {props.totalPrice}</p>
              <p>GO TO CART &#8594;</p>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    minDelPrice: state.minDelPrice,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemCountIncrement: (index) =>
      dispatch({ type: "INCREMENT", index: index }),
    itemCountDecrement: (index) =>
      dispatch({ type: "DECREMENT", index: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
