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
  },

  {
    title: "Damaged Parts",
    id: "damaged_parts",
    resolved: false,
    assignees: [{ id: 1 }, { id: 2 }, { id: 3 }],
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
