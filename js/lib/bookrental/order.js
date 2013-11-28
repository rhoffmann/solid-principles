/**
 * Created by richard on 26.11.13.
 */

var Order = (function(){
  "use strict";

  var Order = function( user ) {
    this.user = user;
    this.items = [];
    this.status = Order.STATUS.started;
    this.dueDate = undefined;
  }

  Order.STATUS = {
    active : "active",
    complete : "complete",
    started : "started"
  };

  Order.prototype = {

    addBook : function(book) {
      this.items.push( new Item(book) );
      this._updateDueDate();
      Library.decrementAvailabilityFor(book);
    },

    process : function() {
      this.status = Order.STATUS.complete;
    },

    terminate : function() {
      this.items.forEach(function(item){
        item.clear();
      });
      this.status = Order.STATUS.complete;
    },

    // private

    _updateDueDate: function() {
      var min = this._minDayLimit();
      this.dueDate = this.dueDate || new Date();
      this.dueDate.setDate(new Date().getDate() + min);
    },

    _minDayLimit : function() {
      return _.min( this.items, function(item){
        return item.book.dayLimit;
      });
    },
    _dayLimits : function() {
      return this.items.map(function(item) {
        return item.books.dayLimit;
      });
    }

  };

  return Order;

}).call(this);

