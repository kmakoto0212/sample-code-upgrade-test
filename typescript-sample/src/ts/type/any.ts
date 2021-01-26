import hello from "../../lib/hello.js"; //not declaration files.

const hoge = hello(); //hoge:any
const fuga: number = hoge; // !?

export {};
