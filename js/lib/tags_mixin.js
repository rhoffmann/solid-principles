/**
 * Created by richard on 25.11.13.
 */


var Tags = function(){
};

Tags.prototype.listTags = function() {
  // workaround for mixin, because we can not set it in the constructor,
  // which will never be called when used as a mixin
  this._tags = this._tags || [];
  return this._tags;
};

Tags.prototype.addTag = function(tag) {
  this._tags = this._tags || [];
  this._tags.push(tag);
  this.publish && this.publish("tagAdded");
};

Tags.prototype.removeTag = function(tag) {
  this._tags = this._tags || [];
  var index = this._tags.indexOf(tag);
  this._tags.splice(index, 1);
  this.publish && this.publish("tagRemoved");
};

Tags.prototype.countTags = function() {
  return this._tags.length;
}