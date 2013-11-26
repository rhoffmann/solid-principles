/**
 * Created by richard on 26.11.13.
 */

Object.prototype.mixin = function( module ) {
  for (method in module.prototype) {
    if (module.prototype.hasOwnProperty(method)) {
      this.prototype[method] = module.prototype[method];
    }
  }
};