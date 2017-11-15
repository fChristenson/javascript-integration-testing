const Api = require("../users");
const MockFetch = require("../../common/MockFetch");
const MockJsonResponse = require("../../common/MockJsonResponse");

describe("User api test", () => {
  it("has a module", () => {
    expect(Api).toBeDefined();
  });

  describe("getUser", () => {
    it("can make a call", async () => {
      const response = MockJsonResponse({ foo: 1 });
      const fetch = MockFetch(response);
      const api = Api(fetch);
      const actual = await api.getUser(1);
      const expected = { foo: 1 };

      expect(actual).toEqual(expected);
    });
  });

  describe("saveUser", () => {
    it("can make a call", async () => {
      const response = MockJsonResponse({ foo: 1 });
      const fetch = MockFetch(response);
      const api = Api(fetch);
      const actual = await api.saveUser(1);
      const expected = { foo: 1 };

      expect(actual).toEqual(expected);
    });
  });
});
