module.exports = data => {
  return {
    json: () => Promise.resolve(data)
  };
};
