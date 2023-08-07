import sontaya from "./media/sontaya.svg";
import ali from "./media/ali.svg";
import clement from "./media/clement.svg";
import patrick from "./media/patrick.svg";
import rocio from "./media/rocio.svg";
import rob from "./media/rob.svg";

export const Users = [
  { id: 1, name: "Ali Alnaimi", avatar: ali, role: "Warehouse Operative" },
  {
    id: 2,
    name: "Sontaya Petch Ang",
    avatar: sontaya,
    role: "Senior Customer Support Executive",
  },
  {
    id: 3,
    name: "Rocio Perez",
    role: "Order Fulfilment Manager",
    avatar: rocio,
  },
  {
    id: 5,
    name: "Patrick Weber",
    role: "Warehouse Manager",
    avatar: patrick,
    dates: ["2 - 3"],
  },
  {
    id: 4,
    name: "Clement ng",
    role: "Account Manager",
    avatar: clement,
    dates: ["2 - 2", "10 - 11"],
  },

  { id: 6, name: "Rob", avatar: rob, role: "Order Fulfilment Manager" },
];
