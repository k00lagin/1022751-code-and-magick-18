'use strict';

function renderWindow(ctx, x, y, width, height) {
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var WINDOW_COLOR = '#FFFFFF';
  var SHADOW_SHIFT = {
    X: 10,
    Y: 10
  };
  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(x + SHADOW_SHIFT.X, y + SHADOW_SHIFT.Y, width, height);
  ctx.fillStyle = WINDOW_COLOR;
  ctx.fillRect(x, y, width, height);
}

function renderText(ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#000000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(text, x, y);
}

function getMaxElement(array) {
  return array.reduce(function (previousElement, currentElement) {
    if (currentElement > previousElement) {
      return currentElement;
    } else {
      return previousElement;
    }
  }, 0);
}

function renderPlayerStat(ctx, shift, player, maxTime) {
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var currentBarHeight = player.time * MAX_BAR_HEIGHT / maxTime;

  if (player.name === 'Вы') {
    ctx.fillStyle = 'red';
  } else {
    ctx.fillStyle = 'hsl(230, ' + (Math.random() * 100) + '%, 50%)';
  }
  ctx.fillRect(140 + shift, 90 + (MAX_BAR_HEIGHT - currentBarHeight), BAR_WIDTH, currentBarHeight);

  renderText(ctx, Math.floor(player.time), 140 + shift, 80 + (MAX_BAR_HEIGHT - currentBarHeight));
  renderText(ctx, player.name, 140 + shift, 110 + MAX_BAR_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderWindow(ctx, 100, 20, 420, 270);
  renderText(ctx, 'Ура вы победили!', 120, 40);
  renderText(ctx, 'Список результатов:', 120, 60);
  var maxTime = getMaxElement(times);
  for (var playerIndex = 0; playerIndex < names.length; playerIndex++) {
    var playerName = names[playerIndex];
    var playerTime = times[playerIndex];
    renderPlayerStat(ctx, playerIndex * 90, {name: playerName, time: playerTime}, maxTime);
  }
};
