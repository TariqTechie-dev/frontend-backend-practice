let students = [
    ["Ali", [85, 90, 78]],   // name + marks in 3 subjects
    ["Sara", [65, 70, 60]],
    ["Bilal", [45, 50, 40]]
];
for (let i = 0; i < students.length; i++) {
    let name = students[i][0];        // student ka naam
    let marks = students[i][1];       // uske marks ka array
    let total = 0;

    for (let j = 0; j < marks.length; j++) {
        total += marks[j];              // sab marks add karo
    }

    console.log(name + " ka total marks = " + total);
}
for (let i = 0; i < students.length; i++) {
    let name = students[i][0];
    let marks = students[i][1];
    let total = 0;

    for (let j = 0; j < marks.length; j++) {
        total += marks[j];
    }

    let average = total / marks.length;  // average calculate karo
    console.log(name + " ka average = " + average.toFixed(2));
}
