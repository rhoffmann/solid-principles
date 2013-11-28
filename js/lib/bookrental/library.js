/**
 * Created by richard on 28.11.13.
 */

var Library = {
  stock : [
    {
      book : new Book("A Feast For Crows")
    , available : 30
    },
    {
      book : new Book("A Clash of Kings")
    , available : 12
    }
  ],

  decrementAvailabilityFor : function(book) {
    var item = this._findInStock(book);
    item.available--;
//    if (item.available < 0) throw new Error("there are no more books available");
  },


  incrementAvailabilityFor : function(book) {
    var item = this._findInStock(book);
    item.available++;
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