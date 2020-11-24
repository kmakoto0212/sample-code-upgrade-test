import hello from "../../lib/hello.js";

const hoge = hello(); //hoge:any
const fuga: number = hoge; // !?

export {};
