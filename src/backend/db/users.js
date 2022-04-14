import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    userName: "Freeyay",
    email: "flyflow@gmail.com",
    password: "paperplanes12",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJiMGZkNDlhMS0zZjcxLTRmODQtYTcxNC0zZjE1Yjk0NWIwM2IifQ.CI88N9zAAHHuolJlPeLAzowyYXrm5SPNe37jaA-Q2ws"
  },
];
