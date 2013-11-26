/**
 * Created by richard on 26.11.13.
 */

var Item = (function(){
  "use strict";

  var Item = function( book, dayLimit ) {
    this.book = book;
    this.dayLimit = dayLimit || 7;
  }

  Item.prototype = {
  };

  return Item;

}).call(this);

