/**
 * Created by richard on 26.11.13.
 */

var Liker = function(){
  "use strict";
  this.likes = 1;

  this.subscribe("liked", function(){
    this.render();
  });

  this.bind();
};

Liker.prototype.updateLikes = function(){
  this.likes++;
  this.publish("liked");
};

Liker.prototype.render = function(){
  $('#like').html( this.likes );
  $('#like-count').append('<li>' + new Date().toString() + '</li>');
};

Liker.prototype.bind = function() {
  var self = this;

  $('#like').on("click", function(e) {
    e.preventDefault();
    self.updateLikes();
  });

};

Liker.mixin(PubSub);