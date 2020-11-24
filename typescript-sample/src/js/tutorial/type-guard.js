"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = (str) => {
  return `Hello,${str}`;
};
//Bad example
let hoge;
hoge = Math.random() ? "hoge" : null; //This is indefinite.
hello(hoge); //NG
//Good example
let fuga;
fuga = Math.random() ? "fuga" : null; //This is indefinite.
if (fuga !== null) {
  hello(fuga); //OK
}
