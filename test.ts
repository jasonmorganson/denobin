// const file = Deno.readTextFileSync("./install.sh");
const file = Deno.readTextFileSync("./file");
console.log(file)

let tpl = '`' + file + '`';
console.log(tpl)

let string = eval(tpl);

console.log(string)
