//4
var animal = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
var i = prompt('動物を入れてください。');
while (true) {
  if (i == 'ライオン') {
  break;
}
  alert(animal[i]);
  i++;
}
//但しライオン以外を実行すると'undefined'となる。
