const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Vijay A.",
    email: "Avijay@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ankur Patel",
    email: "AnkurKIT@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
