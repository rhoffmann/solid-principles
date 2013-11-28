describe "Interface Segregation", ->
  describe "Teacher", ->
    Teacher.mixin UserLoginActions
    Teacher.mixin UserPasswordResetActions

    it "can login", ->
      t = new Teacher("Richard")
      expect(t.login).toBeDefined()

    it "can request a password reset", ->
      t = new Teacher("Richard")
      expect(t.resetPassword).toBeDefined()

  describe "Student", ->
    Student.mixin UserLoginActions

    it "can login", ->
      s = new Student("Bob")
      expect(s.login).toBeDefined()

    it "cannot request a password reset", ->
      s = new Student("Bob")
      expect(s.resetPassword).toBeUndefined()