"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-constant-condition */
const loop = () => {
  while (true) {
    //never end loop...
  }
};
const hoge = loop(); //hoge: never
const fuga = (() => {
  throw new Error();
})(); //fuga: never
