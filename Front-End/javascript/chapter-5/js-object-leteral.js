const student = {
    name: "Tariq",
    age: 23,
    marks: 57
};

const post={
    username:"@tariqhussian",
    content: "hellow this is my ist inst post",
    like:  200,
    repost: 5,
    tag: ["@sanakhan","@gorokhan"]

};

console.log(post.content);
console.log(student.name);

// get values
/*js autumaticaly converts objects keyes to strings
even if we made the num is a key the num will convert to str*/


const obj={
     1:"a",   //dalta js  ws da 1 yaw num na consider      kae       balky  yaw  str consider kege
    2: "b",      
    3: "c",
    null:"d",
    undefinde:"k"
};

console.log(obj[1]);