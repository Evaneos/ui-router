$ViewPreventUpdateProvider.$inject = [];
function $ViewPreventUpdateProvider() {
  var viewCancels = {};

  this.view = function(name, cancelOn) {
    viewCancels[name] = cancelOn;

    return this;
  };

  this.isCanceled = function(name) {
    if (!viewCancels[name]) return false;
    return viewCancels[name]();
  };

  this.$get = function() { return this; };
}

angular.module('ui.router.state').provider('$viewPreventUpdate', $ViewPreventUpdateProvider);
