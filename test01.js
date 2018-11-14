var answer = prompt('数値を入れてください');
alert(answer);

var i = prompt('数値を入れてください');
var i = 0;
if ( i < 0 ){
   alert("負の数");
}
else if ( i > 0 ) {
    alert("正の数");
}
else {
    alert("0");
}

//3.
var animal = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
while (i < animal.length) {
  alert(animal[i]);
  i++; // 「i += 1」と書いても同じ
}
//4.
var answer = prompt('パンダとキリンどちらが好きですか？');
if (answer == 'パンダ') {
  alert('パンダですね');
} else if (answer == 'キリン') {
  alert('キリンですね');
}
//5.
var answer = prompt('パンダとライオンとキリンのうちどれが好きですか？');
if (answer == 'パンダ') {
  alert('パンダですね');
} else if (answer == 'キリン') {
  alert('キリンですね');
} else if (answer == 'ライオン') {
  alert('ライオンですか！');
}

//6.
var animal = [
  {'name': 'パンダ', 'weight': 80},  // 0番目のオブジェクト変数
  {'name': 'ライオン', 'weight': 200},  // 1番目のオブジェクト変数
  {'name': 'キリン', 'weight': 300}   // 2番目のオブジェクト変数
];
alert(animal[1].name);
alert(animal[1].weight);

//7.
var answer = prompt('動物の名前を入れてください');
switch (answer) {
  case 'パンダ':
    alert('パンダは80kgです');
    break;
  case 'ライオン':
    alert('ライオンは200kgです');
    break;
  case 'キリン':
    alert('キリンは300kgです');
    break;
  default:
    alert('パンダorライオンorキリンを入力してください');
    break;
}

function menseki(r){
  return 3.14 * r * r;
}
function enshu(r){
  return 2 * 3.14 * r;
}
var r = 76;

document.write("<p>");
document.write("半径 = " + r + "<br />");
document.write("面積 = " + menseki(r));
document.write("</p>");
