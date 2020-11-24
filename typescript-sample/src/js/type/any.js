"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const hello_js_1 = __importDefault(require("../../lib/hello.js"));
const hoge = hello_js_1.default(); //hoge:any
const fuga = hoge; // !?
