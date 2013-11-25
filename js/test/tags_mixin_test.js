(function() {

  describe("TagsMixin", function() {
    var Class;
    Class = null;
    beforeEach(function() {
      Class = function() {};
      return Class.mixin.apply(Class, [Tags]);
    });
    it("has tags", function() {
      return expect(new Class().listTags()).toEqual([]);
    });
    it("adds a tag", function() {
      var object;
      object = new Class();
      object.addTag("tutsplus");
      return expect(object.listTags()).toEqual(["tutsplus"]);
    });
    return it("removes a tag", function() {
      var object;
      object = new Class();
      object.addTag("tutsplus");
      object.removeTag("tutsplus");
      return expect(object.listTags()).toEqual([]);
    });
  });

}).call(this);
