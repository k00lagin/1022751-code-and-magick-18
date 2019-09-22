'use strict';
var WIZARD_PROPORTION = 1.337;

// eslint-disable-next-line no-unused-vars
var fireballSize = 22;
// eslint-disable-next-line no-unused-vars
var wizardSpeed = 3;
var wizardWidth = 70;

// eslint-disable-next-line no-unused-vars
function getFireballSpeed(left) {
  return left ? 5 : 2;
}

function getWizardHeight() {
  return WIZARD_PROPORTION * wizardWidth;
}

// eslint-disable-next-line no-unused-vars
function getWizardX(width) {
  return width / 2 - wizardWidth / 2;
}

// eslint-disable-next-line no-unused-vars
function getWizardY(height) {
  return height / 3 - getWizardHeight();
}
