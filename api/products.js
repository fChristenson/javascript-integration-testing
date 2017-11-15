const fetch = require("node-fetch");

const getProduct = async productId => {
  const response = await fetch(
    `http://api.myservice.com/products/${productId}`
  );
  return response.json();
};

module.exports.getProduct = getProduct;
