import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName:"FPV-RACING",
    description:
      "Drones more focused on racing ,speed with battery optimisation,agility and maneuverability.",
  },
  {
    _id: uuid(),
    categoryName:"FILM-MAKING",
    description:
      "Drones focused on camera specifications taking care of speedy zoom in and zoom out,image enhancement etc. for film making",
  },
  {
    _id: uuid(),
    categoryName:"ACCESSORIES",
    description:
      "Accessories related to drones to make you own specific and customisable drones.",
  },
];
