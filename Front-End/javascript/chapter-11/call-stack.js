// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//    console.log("calling hello function") ;
//     hello()
// }

// console.log("calling demo function");
// demo()
// console.log("done");

  /*--
  call stack kya hota hai?
  callstack is basically ak data structure jisme function calls ko track kiya jata hai.
  jab bhi hum koi function call karte hain, wo call stack mai push ho jata hai.
  jab function apna kaam complete kar leta hai, to wo call stack se pop ho jata hai.
  is tarah se humare program ka execution order maintain hota hai.
--*/


// visulalization of call stack:

function one(){
    return 1;
}
function two(){
    return  one() + one();
}

function three(){
    let ans= two() + one();
    console.log(ans);
}
three();
 /*--ab ye kesa kam karta hai call stack mai:
1. sabse pehlay three() function call hota hai, to wo call stack mai push ho jata hai.
2. phir three() ke andar two() function call hota hai, to wo bhi call stack mai push ho jata hai.
3. ab two() ke andar one() function call hota hai, to wo bhi call stack mai push ho jata hai.
4. one() apna kaam complete karta hai aur return 1 karta hai, to wo call stack se pop ho jata hai.
5. ab two() ke andar dusra one() function call hota hai, to wo bhi call stack mai push ho jata hai.
6. one() apna kaam complete karta hai aur return 1 karta hai, to wo call stack se pop ho jata hai.
7. ab two() apna kaam complete karta hai aur return 2 (1+1) karta hai, to wo call stack se pop ho jata hai. 
8. ab three() ke andar ek aur one() function call hota hai, to wo bhi call stack mai push ho jata hai.
9. one() apna kaam complete karta hai aur return 1 karta hai, to wo call stack se pop ho jata hai.
10. ab three() apna kaam complete karta hai aur console.log(ans) karta hai, jisme ans ki value 3 hoti hai (2+1).     --*/

