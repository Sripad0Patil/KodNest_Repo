function fetchData() {
    return new Promise((resolve, reject) => {
        let error = false; // change this value to see the error!
        if(!error) {
            setTimeout(() => {
                resolve("Data fetched!");
            }, 1000)
        } else {
            reject("Error: 404");
        }
    });
}

// async await keywords
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
    } catch(error) {
        console.log(error);
    } finally {
        console.log("Exiting async await function....");
        
    }
}

getData();

// using FETCH()
async function getURL() {
    try{
        const response = await fetch('https://api.github.com/users/Sripad0Patil');
        const data = await response.json();
        console.log(data);
        
    } catch(error) {
        console.log("Error: ", error);
    }
}

getURL();