describe "Book rental", ->

  describe "Order", ->

    user = new User("Richard")
    book = new Book("Game of Thrones")

    it "belongs to a user", ->
      expect( new Order(user).user ).toBe user

    it "can have books", ->
      order = new Order()
      order.addBook book
      expect(order.items[0].book).toBe book

    describe "with two books with different day limits", ->
      second_book = new Book("Feast for Crows", 3)

      it "sets the appropriate day limit", ->
        order = new Order()
        order.addBook( book )
        order.addBook( second_book )

        expect(order._minDayLimit()).toBe 3

  describe "FlexibleOrder", ->

    it "allows for some books to be returned prior to the end date", ->
      user = new User("Richard")
      order = new FlexibleOrder( user )
      first_book = new Book("A Clash of Kings", 6)
      second_book = new Book("A Feast For Crows", 3)

      order.addBook( first_book )
      order.addBook( second_book )
      order.process()
      order.terminateBook( second_book )

      difference_in_days = order.dueDate.getDate() - new Date().getDate()

      expect(difference_in_days).toBe(6)

