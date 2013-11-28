/**
 * Created by richard on 26.11.13.
 */

var Book = function( title, dayLimit ) {
  "use strict";
  this.title = title || "no title";
}

Book.prototype.equals = function(book) {
  "use strict";
  return this.title == book.title;
}