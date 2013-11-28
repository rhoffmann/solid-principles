// Generated by CoffeeScript 1.6.3
(function() {
  describe("Interface Segregation", function() {
    describe("Teacher", function() {
      Teacher.mixin(UserLoginActions);
      Teacher.mixin(UserPasswordResetActions);
      it("can login", function() {
        var t;
        t = new Teacher("Richard");
        return expect(t.login).toBeDefined();
      });
      return it("can request a password reset", function() {
        var t;
        t = new Teacher("Richard");
        return expect(t.resetPassword).toBeDefined();
      });
    });
    return describe("Student", function() {
      Student.mixin(UserLoginActions);
      it("can login", function() {
        var s;
        s = new Student("Bob");
        return expect(s.login).toBeDefined();
      });
      return it("cannot request a password reset", function() {
        var s;
        s = new Student("Bob");
        return expect(s.resetPassword).toBeUndefined();
      });
    });
  });

}).call(this);
