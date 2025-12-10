// what is API?

//  API  full form is  (aplication programing interface ) . it is used to communicate  b/w two softwer 

//  it is like a waiter in the resturant  which take oreder form the client and go to the kichen 
//  take food  from where and returan to like respose  
//   api returan data in js formate
// every server have its own api 

// API are of two types
// 1.  public api
// 2.  private api

// 1. public api :  which is open for all user 
// example : https://jsonplaceholder.typicode.com/posts

// 2. private api : which is open for only registered user


// how to use api in javascript

// there are two method to use api in javascript
// 1.  XMLHttprequest (old method)
// 2. fetch api (new method)


// 2. fetch api (new method)
// it is new method to use api in javascript
// example 
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("error", error));
//  in fetch api we use two then method
// 1. first then method is used to convert the response into json formate
// 2. second then method is used to get the data from the json formate
//  catch method is used to handle the error if any error occurs
// we can also use async await method to use fetch api
// example
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
}


// what is json? java script object notation
//  json ak light weight data interchange format hay jo insan or machine dono ke liye asani se read or write ho sakta hay
//  json sirf text hay jo key value pair mai hota hay 
//  json ka use data ko store or transfer karne ke liye kiya jata hay

// json ka use server or client ke beech data transfer karne ke liye kiya jata hay
// json ka use api ke through data transfer karne ke liye kiya jata hay
// pehla hum xml ka use karte thay data transfer karne ke liye lekin ab hum json ka use karte hain kyuki json halka hay or asani se read or write ho sakta hay
// json ka use javascript mai asani se kiya jata hay kyuki json javascript object ke jesa hi hota hay
// json data ko javascript object mai convert karne ke liye hum JSON.parse() method ka use karte hain
// javascript object ko json data mai convert karne ke liye hum JSON.stringify() method ka use karte hain
//  ye javascript object ke jesa hi hota hay lekin json mai key or value dono double quote mai hota hay
// example 
// javascript object    
let obj = {
    name: "tariq",
    age: 22,    }
// json data
let jsonData = {   
    "name": "tariq",
    "age": 22
}

// ak diffrent ye be hay ka json mai hum key kay value mai hum undefined ya function nahi rakh sakte hain lekin javascript object mai hum rakh sakte hain
// example 
let obj2 = {
    name: "tariq",
    age: undefined,
    greet: function() {
        console.log("hello");
    }
}
// json data
let jsonData2 = {
    "name": "tariq",    
    "age": null
    // "greet": function() {
    //     console.log("hello");
    // }
}   
// json data mai hum undefined ki jagah null rakhte hain

  




