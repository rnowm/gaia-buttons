(function(define){define(function(require,exports,module){
'use strict';

/**
 * Dependencies
 */

var utils = require('gaia-component-utils');

// Extend from the HTMLElement prototype
var proto = Object.create(HTMLElement.prototype);

// Allow baseurl to be overridden (used for demo page)
var baseUrl = window.GaiaButtonsBaseUrl || '/bower_compoents/gaia-buttons/';
var stylesheets = [{ url: baseUrl + 'style.css' }];

proto.createdCallback = function() {
  utils.style.call(this, stylesheets);
};

// Register and return the constructor
module.exports = document.registerElement('gaia-buttons', { prototype: proto });

});})((function(n,w){return typeof define=='function'&&define.amd?
define:typeof module=='object'?function(c){c(require,exports,module);}:function(c){
var m={exports:{}},r=function(n){return w[n];};w[n]=c(r,m.exports,m)||m.exports;};})('module-name',this));