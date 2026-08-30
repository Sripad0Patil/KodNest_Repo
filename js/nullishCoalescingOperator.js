// Nullish Coalescing Operator (??): to handle null & undefined values

let val;
val = 5 ?? 10;
console.log(val);


let val1;
val1 = 10 ?? null;
console.log(val1);


let val2;
val2 = undefined ?? 6;
console.log(val2);

let val3;
val3 = null ?? 1 ?? 2;
console.log(val3);

