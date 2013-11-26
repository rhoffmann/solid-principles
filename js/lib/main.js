/**
 * Created by richard on 25.11.13.
 */

$(function(){
  "use strict";

  getJSON("/api/promised.json").then(
    function(data) {
      console.dir(data);
    },
    function(errors) {
      console.dir(errors);
    }
  );

});