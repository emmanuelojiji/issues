import sontaya from "./media/sontaya.svg";
import ali from "./media/ali.svg";
import clement from "./media/clement.svg";
import patrick from "./media/patrick.svg";
import rocio from "./media/rocio.svg";
import rob from "./media/rob.svg";

export const Users = [
  { id: 1, name: "Ali Alnaimi", avatar: ali },
  { id: 2, name: "Sontaya", avatar: sontaya },
  {
    id: 3,
    name: "Rocio Perez",
    role: "Order Fulfilment Manager",
    avatar: rocio,
  },
  {
    id: 4,
    name: "Clement ng",
    role: "Order Fulfilment Manager",
    avatar: clement,
    dates: ["20 - 21", "1-3"],
  },
  { id: 5, name: "Patrick Weber", avatar: patrick, dates: ["20th - 30th"] },
  { id: 6, name: "Rob", avatar: rob },
];
