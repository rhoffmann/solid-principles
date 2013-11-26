/**
 * Created by richard on 26.11.13.
 */


// RESPONSIBILITY: hold the data and initialize
var Liker = function(){
  this.likes = 1;
  this.bind();
};


// RESPONSIBILITY: update the count of likes
Liker.prototype.updateLikes = function(){
  this.likes++;
  this.publish("liked");
};


// RESPONSIBILITY: render/update the DOM
Liker.prototype.render = function() {
  this.updateButton();
  this.logEntry();
};


// RESPONSIBILITY: update the button
Liker.prototype.updateButton = function() {
  $('#like').html( this.likes );
};


// RESPONSIBILITY: log the entry to the list
Liker.prototype.logEntry = function() {
  $('#like-count').append('<li>' + new Date().toString() + '</li>');
};


// RESPONSIBILITY: bind events/subscriptions
Liker.prototype.bind = function() {
  var self = this;

  $('#like').on("click", function(e) {
    e.preventDefault();
    self.updateLikes();
  });

  this.subscribe("liked", function(){
    this.render();
  });
};


// MIXIN PubSub for publish/subscribe
Liker.mixin(PubSub);