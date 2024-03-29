export const Notifications = [
  {
    type: "discussion",
    date: "Today",
    discussions: [
      {
        message:
          "Hello, we have received this part from pos B-01 without a cover. Please check the pictures attached in the report.",
        id: 1,
        name: "Ali Alnaimi ",
        commentId: 1,
        issueId: "wrong_condition",
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
  },
  {
    type: "system",
    system_type: "tracking_email_sent",
    message: <p>Tracking Email sent</p>,
    date: "Wed Aug 02 2023",
  },

  {
    type: "system",
    system_type: "issue_closed",
    message: (
      <p>
        <b>Sontaya</b> marked <b>Wrong Condition</b> as <b></b>Closed
      </p>
    ),
    date: "Mon Aug 07 2023",
  },

  {
    type: "system",
    system_type: "issue_resolved",
    message: (
      <p>
        <b>Sontaya</b> marked <b>Wrong Condition</b> as <b>Resolved</b>
      </p>
    ),
    date: "Wed Aug 02 2023",
  },

  {
    type: "system",
    system_type: "split_job",
    message: (
      <p>
        This job was split into <b>SG-J24853 - C1</b> and <b>2 buying lines</b>{" "}
        were added:
        <b>1FT-5066-1AF71-3EB0 1FT5044-1AF71-3EB0.</b>
      </p>
    ),
    date: "Tue Aug 01 2023",
  },
];
