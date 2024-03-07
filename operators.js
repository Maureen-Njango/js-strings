let a = "ectravaganza";
console.log(a.slice(-4));
//2

let originstring="The quick fox jumped over the lazy dog";
let stringToAdd="eat";
let indexPosition=4;
newString=originstring.slice(0,indexPosition)+ stringToAdd+originstring.slice(indexPosition);
console.log(newString);

let m = "The quick  brown fox jumped over the lazy dog"
let n = "the";
let v = "brown";
console.log((m.match(/the/)).length);
console.log((m.match(/brown/)).length);
//3
let z = "the pupil are reading in the library"
let o = "are"
let y = "The child was sitting on the table before it fell"
let f = "sitting"
console.log(z.includes(o));
console.log(y.includes(f));
//4
let b = "wonderful"
console.log(b.toUpperCase());
let c = "amaizing"
console.log(c.toLowerCase());
let x = "underneath"
console.log(x.toLowerCase());

