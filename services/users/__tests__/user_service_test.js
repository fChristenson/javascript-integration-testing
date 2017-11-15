const UserService = require("../");
const sinon = require("sinon");

describe("UserService test", () => {
  it("has a module", () => {
    expect(UserService).toBeDefined();
  });

  describe("Userservice.updateUserAge", () => {
    it("should update the users age", async () => {
      const user = {
        age: 1
      };

      const api = {
        getUser: () => Promise.resolve(user),
        saveUser: (userId, user) => Promise.resolve(user)
      };
      const userService = UserService(api);
      const actual = await userService.updateUserAge(1, 2);
      const expected = { age: 2 };
      expect(actual).toEqual(expected);
    });

    // this is a bit of a philosophical test case called whitebox test
    it("should call the correct functions in the correct order", async () => {
      const user = {
        age: 1
      };

      const api = {
        getUser: sinon.stub().returns(Promise.resolve(user)),
        saveUser: sinon.stub().returns(Promise.resolve(user))
      };
      const userService = UserService(api);
      await userService.updateUserAge(1, 1);

      expect(api.getUser.calledOnce).toEqual(true);
      expect(api.saveUser.calledOnce).toEqual(true);
      expect(api.getUser.calledBefore(api.saveUser)).toEqual(true);
    });
  });
});
