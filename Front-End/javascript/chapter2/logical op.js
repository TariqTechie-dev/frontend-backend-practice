// logical operators
//  logical operators are used to perform logical operations on boolean values
//  logical operators are used to combine two or more conditions or expressions

// 1. AND (&&) operator
//    Returns true if both operands are true
    true && true; // true
    false && true; // false
    true &&  false; // false
    false && false; // false

    let marks=90;

    if(marks >= 33 && marks <= 180) {
        console.log("You are pass");
        console.log("Youre grade is A");
        
    }

    // 2. OR (||) operator
//    Returns true if at least one of the operands is true.
    true || true; // true
    false ||  true; // true
    true ||  false; // true
    false || false; // false
    let marks2=90;

    if(marks2 = 33 || marks2 >= 80) {
        console.log("You are pass");
        console.log("Youre grade is A");
    }

// 3. NOT (!) operator
//    Returns true if the operand is false, and false if the operand is true

    !true; // false
    !false; // true
    let isPass = 90;
    if(!isPass < 33) {
        console.log("You are not pass");
    }
    

