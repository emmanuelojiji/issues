import { Users } from "./Users";

export const Issues = [
  {
    title: "Wrong Condition",
    id: "wrong_condition",
    status: "unresolved",
    assignees: [
      { id: 1, available: true },
      { id: 2, available: true },
      { id: 3, available: true },
      { id: 4, available: false },
      { id: 5, available: false },
    ],
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
        {
          message:
            "Hello, we have received this part from pos B-01 without a cover. Please check the pictures attached in the report.",
          id: 1,
          name: "Ali Alnaimi ",
        },
        {
          message:
            "Customer won't accept that, please contact supplier for an exchange @sontaya.petch.ang",
          id: 4,
          name: "Clement Ng",
        },
        {
          message: "@rocio.perez @kelvin.rhodes FYI",
          id: 5,
          name: "Patrick Weber",
        },
      ],
      [
        {
          message: "Can someone pick this up next week, I’ll be on holiday.",
          id: 3,
          name: "Rocio",
        },
        { message: "No worries, I’ll get it sorted.", id: 4, name: "Clement" },
      ],
    ],
  },

  {
    title: "Damaged Parts",
    id: "damaged_parts",
    status: "closed",
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
  {
    title: "Damaged Parts",
    id: "damaged_parts",
    status: "unresolved",
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
  {
    title: "Damaged Parts",
    id: "damaged_parts",
    status: "resolved",
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
  {
    title: "Damaged Parts",
    id: "damaged_parts",
    status: "resolved",
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
