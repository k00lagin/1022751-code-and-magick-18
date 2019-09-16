'use strict';
var WIZARD_PROPORTION = 1.337;
var WIND_SPEED = 1.5;
var FIREBALL_BASE_SPEED = 3.5;
var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;


function getFireballSpeed(left) {
  if (left) {
    return FIREBALL_BASE_SPEED + WIND_SPEED;
  } else {
    return FIREBALL_BASE_SPEED - WIND_SPEED;
  }
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
