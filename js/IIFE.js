// Immediately Invoked Function Expression -> ()();

(function hello() { // named IIFE
    console.log("Hello world");
})();

( () => { // unnamed IIFE
    console.log("DB connected")
})();

( (name) => { // parameterized IIFE
    console.log(`Hello ${name}`);
})('Ram');