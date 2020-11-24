"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-constant-condition */
var loop = function () {
  while (true) {
    //never end loop...
  }
};
var hoge = loop(); //hoge: never
var fuga = (function () {
  throw new Error();
})(); //fuga: never
