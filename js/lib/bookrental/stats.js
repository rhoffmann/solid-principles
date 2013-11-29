/**
 * Created by richard on 29.11.13.
 */

var Stats = function(){};

Stats.prototype.rentedBooks = function(orders) {
  "use strict";

  return orders.reduce(function(array, order, index){
    order.items.forEach(function(item) {
      array.push(item.book);
    });
    return array;
  }, []);
};