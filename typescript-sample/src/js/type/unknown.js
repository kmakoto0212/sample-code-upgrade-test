"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const hello_js_1 = __importDefault(require("../../lib/hello.js"));
let hoge = hello_js_1.default(); //hoge:unknown
const fuga = hoge; // NG
const say = (arg) => {
  switch (typeof arg) {
    case "string":
      return `Hello,${arg}!!`; //arg:string
    case "number":
      return `Hello,No.${arg}!!`; //arg:number
    default:
      return `Hello,unknown!!`;
  }
};
say("piyo"); //Hello,piyo!!
say(13); //Hello,No.13!!
say({}); //Hello,unknown!!
