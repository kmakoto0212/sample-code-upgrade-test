"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var hello_js_1 = __importDefault(require("../../lib/hello.js")); //not declaration files.
var hoge = hello_js_1.default(); //hoge:any
var fuga = hoge; // !?
