
// promise
//    the promise object represent the eventual completion or (failer ) of an asyncrhronus operation
//     and its resulting value
//     it is an java script object  
//     it have three state  resolve, reject and pending
// .then and .catch   are two method of promise obj which we used 



function saveTodb(data) {
    return new Promise((resolve, reject) => {
        let interspeed = Math.floor(Math.random() * 10) + 1;
        if (interspeed >= 4) {
            resolve("sucess: data was save to DB");
        } else {
            reject("failer: weak connection");
        }

    })
}

// let request = saveTodb("tariq");
// request.then(() => {
//     console.log("promise was resolved");
// }).catch(() => {
//     console.log("promise was rejected");
// })

// saveTodb("tariq")
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(saveTodb())
//     }).catch(() => {
//         console.log("promise was rejected");
//     });


//    Promise chaining

saveTodb("usman")
    .then((result) => {
        console.log("Data1 is saved");
        console.log(result);
        return saveTodb("orahan");
    })
    .then((result) => {
        console.log("data2 is saved");
         console.log(result);
        return saveTodb("artugal");
    })
    .then((result) => {
        console.log("data3 is saved")
         console.log(result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(error);
    })
