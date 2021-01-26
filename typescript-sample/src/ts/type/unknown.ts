import hello from "../../lib/hello.js"; //not declaration files.

let hoge: unknown = hello(); //hoge:unknown
/* const fuga: number = hoge; // NG */

const say = (arg: unknown) => {
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

export {};
