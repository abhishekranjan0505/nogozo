import React from "react";
import { connect } from "react-redux";
import classes from "./Cart.module.css";

const cart = (props) => {
  const delCharges = props.minDelPrice <= 0 ? 0 : 120;
  const grandTotal = delCharges + props.totalPrice;

  const items = props.items.filter((item) => item.count > 0);

  return (
    <div className={classes.Root}>
      <h5>ITEMS</h5>
      {items.map((item) => {
        return (
          <p key={item.id} className={classes.ItemName}>
            {item.count}X {item.name}
          </p>
        );
      })}
      <hr />
      <select>
        <option>Pay and pickup at shop</option>
        <option>Pay on Delivery</option>
      </select>
      <input type="text" placeholder="Instruction for Shop" />
      <div className={classes.ItemTotal}>
        <p>Item Total</p>
        <p>&#8377;{props.totalPrice}</p>
      </div>
      <div className={classes.DeliveryCharges}>
        <p>Delivery Charges</p>
        <p>&#8377;{delCharges}</p>
      </div>
      <hr />
      <div className={classes.GrandTotal}>
        <p>Grand Total</p>
        <p>&#8377;{grandTotal}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.totalPrice,
    minDelPrice: state.minDelPrice,
    items: state.items,
  };
};

export default connect(mapStateToProps)(cart);
