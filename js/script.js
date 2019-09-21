'use strict';
var WIZARD_PROPORTION = 1.337;

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

function getFireballSpeed(left) {
  return left ? 5 : 2;
}

function getWizardHeight() {
  return WIZARD_PROPORTION * wizardWidth;
}

function getWizardX(width) {
  return width / 2 - wizardWidth / 2;
}

function getWizardY(height) {
  return height / 3 - getWizardHeight();
}
