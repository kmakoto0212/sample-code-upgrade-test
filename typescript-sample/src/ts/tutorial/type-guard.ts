const hello = (str: string) => {
  return `Hello,${str}`;
};

//Bad example
let hoge: string | null;
hoge = Math.random() ? "hoge" : null; //This is indefinite.
/* hello(hoge); //Error Code. */

//Good example
let fuga: string | null;
fuga = Math.random() ? "fuga" : null; //This is indefinite.
if (fuga !== null) {
  hello(fuga); //OK
}

export {};
