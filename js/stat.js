'use strict';
window.renderStatistics = function (ctx, names, times) {
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var maxTime = times.reduce(function(previousTime, currentTime) {
    if (currentTime > previousTime) {
      return currentTime;
    } else {
      return previousTime;
    }
  }, 0);
  for (var playerIndex = 0; playerIndex < names.length; playerIndex++) {
    var playerName = names[playerIndex];
    var playerTime = times[playerIndex];
    var currentBarHeight = playerTime * MAX_BAR_HEIGHT / maxTime;

    if (playerName === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = `hsl(230, ${Math.random() * 100}%, 50%)`;
    }
    ctx.fillRect(140 + playerIndex * 90, 90 + (MAX_BAR_HEIGHT - currentBarHeight), BAR_WIDTH, currentBarHeight);

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.floor(playerTime), 140 + playerIndex * 90, 80 + (MAX_BAR_HEIGHT - currentBarHeight));
    ctx.fillText(playerName, 140 + playerIndex * 90, 110 + MAX_BAR_HEIGHT);
  }
}
