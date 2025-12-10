//json kay baray mai hum aglay topics mai dekhenge
// json ka use server or client ke beech data transfer karne ke liye kiya jata hay
// json ka use api ke through data transfer karne ke liye kiya jata hay

// access data from json 


//    json  string ke form mai hota hay islia pehla hum isay javascript object mai convert karte hain phir hum isay access karte hain
// json data ko javascript object mai convert karne ke liye hum JSON.parse() method ka use karte hain
// example
 
let jsonData =' {"fact":"A cat can jump up to five times its own height in a single bound.","length":65}'

let jsObj = JSON.parse(jsonData);
console.log(jsObj.fact);

// javascript object ko json data mai convert karne ke liye hum JSON.stringify() method ka use karte hain
// example

let obj = {
    name: "tariq",
    age: 22
}   
 
console.log(JSON.stringify(obj));
// ab ye  json string ban gaya hay
// ab isay hum server or client ke beech transfer kar sakte hain
 