const makeGetUserFunc = fetch => {
  return async userId => {
    const response = await fetch(`http://api.myservice.com/users/${userId}`);
    return response.json();
  };
};

const makeSaveUserFunc = fetch => {
  return async (userId, userData) => {
    const response = await fetch(`http://api.myservice.com/users/${userId}`, {
      method: "POST",
      data: userData
    });
    return response.json();
  };
};

module.exports = fetch => {
  return {
    getUser: makeGetUserFunc(fetch),
    saveUser: makeSaveUserFunc(fetch)
  };
};
