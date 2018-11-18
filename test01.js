//1.2.
var i = prompt('数値を入れてください。');
if ( i < 0 ){
  alert("負の数");
}
else if ( i > 0 ) {
  alert("正の数");
}
else {
  alert("数値を入力してください！");
}

//3.
var animal = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
while (i < animal.length) {
  alert(animal[i]);
  i++; // 「i += 1」と書いても同じ
}

//4.5
var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
var animal = prompt('動物を入れてください。');
while (i < animals.length) {

  alert(animals[i]);//ライオンの添字alert
  if (animal == 'ライオン' && animals[i] == 'ライオン' ) {
      break;
  }
  i++; // 「i += 1」と書いても同じ
}

//6.
var animal = [
  {'name': 'パンダ', 'weight': 80},  // 0番目
  {'name': 'ライオン', 'weight': 200},  // 1番目
  {'name': 'キリン', 'weight': 300}   // 2番目
];
alert(animal[1].name);
alert(animal[1].weight);

//7.
var answer = prompt('動物の名前を入れてね');
switch (answer) {
  case 'パンダ':
    alert('80kg');
    break;
  case 'ライオン':
    alert('200kg');
    break;
  case 'キリン':
    alert('300kg');
    break;
  default:
    alert('パンダorライオンorキリンを入力してください');
    break;
}

//8.
var m  = prompt('円の半径を入力してください。');
function menseki(r){
  m = 3.14 * r * r;
}
menseki(m);
alert(m);
