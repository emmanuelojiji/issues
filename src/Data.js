import { Users } from "./Users";
import part_1 from "./media/part-1.png";
import part_2 from "./media/part-2.png";

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

    attachments: [
      {
        id: 1,
        src: part_1,
      },

      { id: 2, src: part_2 },
    ],

    discussions: [
      [
        {
          message:
            "Hello, we have received this part from pos B-01 without a cover. Please check the pictures attached in the report.",
          id: 1,
          name: "Ali Alnaimi ",
          commentId: 1,
          replies: [
            {
              message:
                "Customer won't accept that, please contact supplier for an exchange @sontaya.petch.ang",
              id: 4,
              name: "Clement Ng",
              commentId: 2,
            },
            {
              message: "@rocio.perez @kelvin.rhodes FYI",
              id: 5,
              name: "Patrick Weber",
              commentId: 3,
            },
          ],
        },
      ],
      [
        {
          message:
            "Hello, we have received this part from pos B-01 without a cover. Please check the pictures attached in the report.",
          id: 1,
          name: "Ali Alnaimi ",
          commentId: 1,
          replies: [
            {
              message:
                "Customer won't accept that, please contact supplier for an exchange @sontaya.petch.ang",
              id: 4,
              name: "Clement Ng",
              commentId: 2,
            },
            {
              message: "@rocio.perez @kelvin.rhodes FYI",
              id: 5,
              name: "Patrick Weber",
              commentId: 3,
            },
          ],
        },
      ],
      [
        {
          message:
            "Hello, we have received this part from pos B-01 without a cover. Please check the pictures attached in the report.",
          id: 1,
          name: "Ali Alnaimi ",
          commentId: 1,
          replies: [
            {
              message:
                "Customer won't accept that, please contact supplier for an exchange @sontaya.petch.ang",
              id: 4,
              name: "Clement Ng",
              commentId: 2,
            },
            {
              message: "@rocio.perez @kelvin.rhodes FYI",
              id: 5,
              name: "Patrick Weber",
              commentId: 3,
            },
          ],
        },
      ],
    ],
  },

  {
    title: "Damaged Parts",
    id: "damaged_parts",
    status: "closed",
    assignees: [
      { id: 1, available: true },

      { id: 3, available: true },

      { id: 5, available: false },
    ],
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
    title: "Missing Parts",
    id: "missing_parts",
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
    title: "Extra Parts",
    id: "extra_parts",
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

export const ToDos = [
  "Contact supplier for exchange for B-01 part",
  "Chase reply from Save-Tech",
  "Chase reply from Save-Tech",
];
