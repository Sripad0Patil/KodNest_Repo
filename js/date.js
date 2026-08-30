let myDate = new Date

console.log(myDate);
console.log(Date);
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// in js months start from 0 - 11
// Start -> 1 / jan / 1970  to  end -> till now 

console.log("Milli second's: " + Date.now());
console.log("Second's: " + Math.floor(Date.now()/1000))
console.log("Minute's: " + Math.floor((Date.now()/1000) / 60));
console.log("Hour's: " + Math.floor((Date.now()/1000) / 360));
console.log("Day's: " + Math.floor((Date.now()/1000) / (360*24)));



