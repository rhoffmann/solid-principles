(function() {

  describe("TimedTask", function() {
    it("has a title", function() {
      return expect(new TimedTask({
        title: "My First Task"
      }).title).toEqual("My First Task");
    });
    return it("has a starting time", function() {
      return expect(new TimedTask().startingDate).toBeGreaterThan(123456);
    });
  });

}).call(this);
