const arr = [1, 2, 3, 4, 5];

// normal for loop
for(let i=0; i<arr.length; i++) {
    // console.log(arr[i]);
}

// for-each loop
arr.forEach( function(i) {
    // console.log(i);
    
})

arr.forEach( (value) => {
    // console.log(value);
})

// for in
for (const key in arr) {
    // console.log(arr[key]); // here key is the index
       
}

// for of
for (const element of arr) {
    // console.log(element);
    
}

// while
let i=0;
while(i<arr.length) {
    // console.log(arr[i]);
    i++;
}

// do while
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j<arr.length);