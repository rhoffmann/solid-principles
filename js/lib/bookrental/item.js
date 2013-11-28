/**
 * Created by richard on 26.11.13.
 */

var Item = (function(){
  "use strict";

  var Item = function( book ) {
    this.book = book;
  }

  Item.prototype = {
    clear: function() {
      Library.incrementAvailabilityFor(this.book);
    }
  };

  return Item;

}).call(this);

