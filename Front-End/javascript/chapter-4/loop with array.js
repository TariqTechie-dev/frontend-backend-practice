// array with for loop

/*
let fruits=["appale","mango","banana","orange"]

for(i=0;i<=fruits.length;i++){
    console.log(i,fruits[i]);
}
*/

// array with  while loop
/*
 i=0
while(i<=fruits.length){
    console.log(i,fruits[i])
    i++;
}
    */

// loop with nested Array
// let heroes = [
//     ["spiderman", "ironman", "thor"],
//     ["superman","wonder women","flash"]

// ];

// for(i=0;i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(j, heroes[i][j]);

//     }
// }
/*
let students = [
  ["tariq", 20],
  ["ali", 22],
  ["sara", 19],
];
for (let i = 0; i < students.length; i++) {
  console.log(`info of student ${i + 1}:`);

  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
} */

  let fruits = ["apple", "mango", "banana", "orange"];
  for(fruit of fruits){
      console.log(fruit);
  }
