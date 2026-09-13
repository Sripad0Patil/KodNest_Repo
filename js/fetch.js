// using fetch() method
fetch('https://api.github.com/users/Sripad0Patil')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})