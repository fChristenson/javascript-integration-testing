const Users = require("./users");
const products = require("./products");

// fetch can now be whatever we want
module.exports = fetch => {
  return {
    users: Users(fetch),
    products
  };
};
