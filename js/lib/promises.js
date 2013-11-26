/**
 * Created by richard on 26.11.13.
 */

function getJSON(url) {
  "use strict";

  var promise = new RSVP.Promise(function(respond, failure) {

    $.ajax({
      dataType : "json",
      url : url,
      success : function(data) {
        respond(data);
      },
      error : function(xhr, status, error) {
        debugger;
        failure([xhr, status, error]);
      }
    });
  });

  return promise;

};