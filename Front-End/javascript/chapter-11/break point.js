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



//  point ka matalb ye hay ka yaha per rok jao ka es line mai kya horah hay   ye debugging mia use hota hybrak