(function() {

  describe("PubSub Mixin and Counting tags", function() {
    var Class;
    Class = null;
    beforeEach(function() {
      Class = function() {};
      Class.mixin.apply(Class, [Tags]);
      return Class.mixin.apply(Class, [PubSub]);
    });
    it("the mixed in object should have the method 'subscribe'", function() {
      var object;
      object = new Class();
      return expect(object.subscribe).toBeDefined();
    });
    it("the mixed in object should have the method 'publish'", function() {
      var object;
      object = new Class();
      return expect(object.publish).toBeDefined();
    });
    it("prints the tag count via pubsub for each tag added", function() {
      var object, output;
      object = new Class();
      output = "";
      object.subscribe("tagAdded", function() {
        return output = this.countTags().toString();
      });
      object.addTag("tutsplus");
      object.addTag("sometag");
      return expect(output).toEqual("2");
    });
    return it("prints the tag count via pubsub for each tag removed", function() {
      var object, output;
      object = new Class();
      output = "";
      object.subscribe("tagRemoved", function() {
        return output = this.countTags().toString();
      });
      object.addTag("tutsplus");
      object.addTag("sometag");
      object.removeTag("sometag");
      return expect(output).toEqual("1");
    });
  });

}).call(this);
