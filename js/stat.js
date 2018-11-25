'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_FONT = '16px PT Mono';
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = -150;
var COLUMN_X = 140;
var COLUMN_Y = 210;
var COLUMN_GAP = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var TEXT_Y = 230;
var TEXT_ALERT = 30;
var TEXT_ALERT_GAP = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = CLOUD_FONT;
  ctx.fillText('Ура вы победили!', COLUMN_X, TEXT_ALERT);
  ctx.fillText('Список результатов:', COLUMN_X, TEXT_ALERT + TEXT_ALERT_GAP);

  ctx.fillStyle = '#000';

  var randomNumber = function (number) {
    var number = Math.floor(Math.random() * 255);
    return number.toString();
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = ('#000');
    ctx.fillText(players[i], COLUMN_X + ((COLUMN_WIDTH + COLUMN_GAP) * i), TEXT_Y);
    if (players[i] === 'Вы') {
      ctx.fillStyle = ('rgba(255, 0, 0, 1)');
    } else {
      ctx.fillStyle = ('rgb(0, 0, ' + randomNumber() +')');
    }
    ctx.fillRect(COLUMN_X + ((COLUMN_WIDTH + COLUMN_GAP) * i), COLUMN_Y, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};
