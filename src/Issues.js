import { Users } from "./Users";

export const Issues = [
  {
    title: "Wrong Condition",
    id: "wrong_condition",
    resolved: false,
    assignees: [{ id: 1 }, { id: 2 }, { id: 3 }],
    fields: [
      {
        heading: "Part Number",
        content: "1FT5044-1AF71-3EB0",
      },
      {
        heading: "Part Manufacturer",
        content: "Siemens",
      },
      {
        heading: "Quantity",
        content: "3",
      },
      {
        heading: "Condition Received",
        content: "Broken",
      },
    ],

    discussions: [
      [
        { message: "This is the first comment", id: 1, name: "Ali" },
        { message: "This is the second comment", id: 2, name: "Sontaya" },
      ],
      [
        { messaget: "This is the first comment", id: 3, name: "Rocio" },
        { message: "This is the second comment", id: 4, name: "Clement" },
      ],
    ],
  },

  {
    title: "Damaged Parts",
    id: "damaged_parts",
    resolved: false,
    assignees: [{ id: 1 }, { id: 2 }],
    fields: [
      {
        heading: "Damaged Line",
        content: "1FT5044-1AF71-3EB0",
      },
      {
        heading: "Carrier",
        content: "UPS",
      },
      {
        heading: "Quantity",
        content: "3",
      },
    ],
  },
];
