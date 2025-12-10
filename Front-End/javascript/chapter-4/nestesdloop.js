// nested for loop
// loop within loop 

for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

console.log("while loop started");

// while loop
// loop until condition is met
let i = 5;
while(i>=1){
    console.log(i);
    i--;
}



const favrtmovie="stranger"
let guess=prompt("guess my favorite movie")

while((guess!=favrtmovie)&&(guess!="quit")){
     guess=prompt("wrong answer try again")
}
if(guess==favrtmovie){
    console.log("congrates! you guess write");
}
else{
    console.log("you quit.")
}