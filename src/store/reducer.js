import image from "../assets/Shop/Items/image.jpeg";
import itemImage from "../assets/Shop/Items/itemImage.jpeg";

const initialState = {
  minDelPrice: 399,
  totalPrice: 0,
  items: [
    {
      id: 1,
      img: image,
      name: "6 Inch Color Mala",
      amount: "1 Piece",
      price: 20,
      count: 0,
    },
    {
      id: 2,
      img: itemImage,
      name: "7 Inch Mala",
      amount: "1 Piece",
      price: 30,
      count: 0,
    },
    {
      id: 3,
      img: image,
      name: "9 Inch Moti Mala",
      amount: "1 Piece",
      price: 50,
      count: 0,
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
      count: 0,
    },
    {
      id: 6,
      img: itemImage,
      name: "Choti Mala - Golden White",
      amount: "1 Piece",
      price: 5,
      count: 0,
    },
    {
      id: 7,
      img: image,
      name: "Choti White Mala",
      amount: "1 Piece",
      price: 5,
      count: 0,
    },
    {
      id: 8,
      img: itemImage,
      name: "Flower Mala",
      amount: "1 Piece",
      price: 70,
      count: 0,
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    let tempCount = state.items[action.index].count;
    tempCount = tempCount + 1;
    let tempArr = [...state.items];
    tempArr[action.index].count = tempCount;

    let tempMinDelPrice = state.minDelPrice;
    tempMinDelPrice = tempMinDelPrice - state.items[action.index].price;

    const tempTotalPrice = state.items[action.index].price + state.totalPrice;

    return {
      ...state,
      items: tempArr,
      minDelPrice: tempMinDelPrice,
      totalPrice: tempTotalPrice,
    };
  }

  if (action.type === "DECREMENT") {
    let tempCount = state.items[action.index].count;
    let tempArr = [...state.items];
    let tempMinDelPrice = state.minDelPrice;
    let tempTotalPrice = state.totalPrice;

    if (tempCount > 0) {
      tempCount = tempCount - 1;
      tempArr[action.index].count = tempCount;
      tempMinDelPrice = tempMinDelPrice + state.items[action.index].price;
      tempTotalPrice = tempTotalPrice - state.items[action.index].price;
    }
    return {
      ...state,
      items: tempArr,
      minDelPrice: tempMinDelPrice,
      totalPrice: tempTotalPrice,
    };
  }
  return state;
};

export default reducer;
