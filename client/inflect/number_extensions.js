// Generated by CoffeeScript 1.6.3
(function() {
  var enableNumberExtensions, inflect;

  inflect = require('../inflect');

  enableNumberExtensions = function() {
    return Number.prototype.ordinalize = function() {
      return inflect.ordinalize(this);
    };
  };

  exports.enableNumberExtensions = enableNumberExtensions;

}).call(this);