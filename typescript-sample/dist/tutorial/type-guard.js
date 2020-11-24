"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello = function (str) {
  return "Hello," + str;
};
//Bad example
var hoge;
hoge = Math.random() ? "hoge" : null; //This is indefinite.
hello(hoge); //NG
//Good example
var fuga;
fuga = Math.random() ? "fuga" : null; //This is indefinite.
if (fuga !== null) {
  hello(fuga); //OK
}
