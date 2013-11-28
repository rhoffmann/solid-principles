/**
 * Created by richard on 28.11.13.
 */

var Teacher = function(name) {
  this.name = name;
  return this;
};

var Student = function(name) {
  this.name = name;
  return this;
};


// split the interface, only implement the interfaces you will need

var UserLoginActions = function() {};
UserLoginActions.prototype = {
  login : function(password) {}
};


var UserPasswordResetActions = function() {};
UserPasswordResetActions.prototype = {
  resetPassword : function() {}
};