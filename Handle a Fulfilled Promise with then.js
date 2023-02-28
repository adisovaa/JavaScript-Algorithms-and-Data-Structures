// 20. Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;

    makeServerRequest.than(result => {
        console.log(result)
    })
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});