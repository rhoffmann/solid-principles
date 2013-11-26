/**
 * Created by richard on 26.11.13.
 */

var Order = (function(){
  "use strict";

  var Order = function( user ) {
    this.user = user;
    this.items = [];
    this.status = "started";
    this.dueDate = undefined;
  }

  Order.prototype = {
    addBook : function(book) {
      this.items.push( new Item(book) );
    },
    _minDayLimit : function() {
      return _.min( this.items, function(item){
        return item.dayLimit;
      });
    }
  };

  return Order;

}).call(this);

