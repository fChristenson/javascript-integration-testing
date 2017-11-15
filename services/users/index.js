const makeUpdateUserAge = (getUser, saveUser) => async (userId, age) => {
  const user = await getUser(userId);
  const updatedUser = { ...user, age };
  return saveUser(userId, updatedUser);
};

module.exports = api => {
  return {
    updateUserAge: makeUpdateUserAge(api.getUser, api.saveUser)
  };
};
