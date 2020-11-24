"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hoge = "hoge";
hoge = "fuga"; //OK
hoge = ""; //OK
hoge = 123; //NG
hoge = null; //NG
