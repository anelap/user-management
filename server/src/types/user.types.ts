export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const emailAndNameArray: User[] = [
  {
    _id: "1",
    firstName: "Marina",
    lastName: "Smith",
    email: "marina@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "2",
    firstName: "Kip",
    lastName: "Johnson",
    email: "kip@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "3",
    firstName: "Lorie",
    lastName: "Williams",
    email: "lorie@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "4",
    firstName: "Jasmin",
    lastName: "Brown",
    email: "jasmin@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "5",
    firstName: "Emma",
    lastName: "Davis",
    email: "emma@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "6",
    firstName: "Elvia",
    lastName: "Miller",
    email: "elvia@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "7",
    firstName: "Liliana",
    lastName: "Wilson",
    email: "liliana@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "8",
    firstName: "Florencio",
    lastName: "Moore",
    email: "florencio@wiline.com",
    phoneNumber: "1234567890",
  },
  {
    _id: "9",
    firstName: "Delores",
    lastName: "Taylor",
    email: "delores@wiline.com",
    phoneNumber: "1234567890",
  },
];

const emailAndPhoneNumArray = [
  {
    email: "marina@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0105",
      },
    ],
  },
  {
    email: "kip@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0168",
      },
    ],
  },
  {
    email: "lorie@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0162",
      },
    ],
  },
  {
    email: "jasmin@wiline.com",
    phoneNumbers: [{ type: "primary", value: "202-555-0168" }],
  },
  {
    email: "emma@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0187",
      },
    ],
  },
  {
    email: "elvia@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0164",
      },
    ],
  },
  {
    email: "liliana@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0161",
      },
    ],
  },
  {
    email: "florencio@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0127",
      },
    ],
  },
  {
    email: "delores@wiline.com",
    phoneNumbers: [
      {
        type: "primary",
        value: "202-555-0143",
      },
    ],
  },
];

export const users: User[] = emailAndNameArray.map((user) => {
  const userData = emailAndPhoneNumArray.find(
    (phone) => phone.email === user.email
  );
  return {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: userData ? userData?.phoneNumbers[0].value : "No number",
  };
});
