/**
 * Created by richard on 25.11.13.
 */

$(function(){
  "use strict";
  $("html").on("click", function(){
    alert("html was clicked");
  });
  getJSON("/api/promised.json").then(
    function(data) {
      console.dir(data);
    },
    function(errors) {
      debugger;
      console.dir(errors);
    }
  );

});