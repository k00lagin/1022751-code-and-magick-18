'use strict';
var fireballSize = 22;

var getFireballSpeed = function(left) {
  return left ? 5 : 2;
}

var wizardSpeed  = 3;
var wizardWidth = 70;


var getWizardHeight = function() {
  return 1.337 * wizardWidth;
}

//we cannot avoid using wizardWidth as a parameter, cause this'll be impure function
var getWizardX = function(width/*, wizardWidth */) {
  return width / 2 - wizardWidth / 2;
}

var getWizardY = function(height) {
  return height / 3 - getWizardHeight();
}
