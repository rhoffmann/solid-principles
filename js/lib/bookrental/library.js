/**
 * Created by richard on 28.11.13.
 */


var Library = function() {
  "use strict";
  this.stock = [
    {
      book : new Book("Feast for Crows")
    , available : 3
    },
    {
      book : new Book("A Clash of Kings")
    , available : 1
    }
  ];
}

Library.prototype = {
  decrementAvailabilityFor : function(book) {
    var item = this._findInStock(book);
    item.available--;
    if (item.available < 0) throw new Error("there are no more books available");
  },

  _findInStock : function(book) {
    "use strict";
    var found = null;
    this.stock.forEach(function(item){
        if (item.book.equals(book)) {
          found = item;
          return;
        }
    });
    return found;
  }
};