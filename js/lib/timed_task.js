/**
 * Created by richard on 25.11.13.
 */

var TimedTask = function(options) {
  "use strict";

  options = options || {};

  // "inherit" from Task
  var that = new Task(options);

  that.startingDate = options.startingDate || new Date().getTime()

  return that;
}

