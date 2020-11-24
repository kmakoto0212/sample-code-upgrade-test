"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var hello_js_1 = __importDefault(require("../../lib/hello.js"));
var hoge = hello_js_1.default(); //hoge:unknown
var fuga = hoge; // NG
var say = function (arg) {
  switch (typeof arg) {
    case "string":
      return "Hello," + arg + "!!"; //arg:string
    case "number":
      return "Hello,No." + arg + "!!"; //arg:number
    default:
      return "Hello,unknown!!";
  }
};
say("piyo"); //Hello,piyo!!
say(13); //Hello,No.13!!
say({}); //Hello,unknown!!
