function $(id) {
  return document.getElementById(id);
}

Function.prototype.bind = function(scope) {
  var _function = this;

  return function() {
    return _function.apply(scope, arguments);
  };
};