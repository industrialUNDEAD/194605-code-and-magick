var CLOUD-WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_FONT = '16px PT Mono';
var HISTOGRAM_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP; // надо подумать как изменить переменную под задачу

var renderCloud = function(ctx, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD-WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(110, 60, 40, 150);

  ctx.fillText('Иван', 110, 105);
  ctx.fillRect(160, 90, 40, 20);

  ctx.fillText('Юлия', 110, 135);
  ctx.fillRect(160, 120, 40, 20);
}
