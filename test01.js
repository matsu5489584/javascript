//4
var animal = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
var i = prompt('動物を入れてください。');
while (true) {
  if (i < animal.length) {
  break;
}
  alert(animal[i]);
  i++;
}
//但し上記を実行すると'undefined'となる。
