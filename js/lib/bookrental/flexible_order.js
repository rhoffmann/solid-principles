/**
 * Created by richard on 26.11.13.
 */

var FlexibleOrder = (function(){
  "use strict";

  var FlexibleOrder = function( user ) {
    Order.apply(this, [user] ); // call the "super constructor";
    return this;
  };

  FlexibleOrder.prototype = Order.prototype;

  FlexibleOrder.prototype.terminateBook = function(book) {
    var index = this._findItemIndex(book);
    this.items.splice(index, 1);
    this._updateDueDate();
  };

  return FlexibleOrder;

}).call(this);

