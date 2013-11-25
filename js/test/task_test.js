(function() {

  describe("Task", function() {
    it("has a title", function() {
      return expect(new Task().title).toEqual("Untitled Task");
    });
    return it("can be set title", function() {
      return expect(new Task({
        title: "My First Task"
      }).title).toEqual("My First Task");
    });
  });

}).call(this);
