let todo = [];
let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("you quit the app");
        break;
    }

    if (req == "list") {
        console.log("----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i + 1}: ${todo[i]}`);
        }
        console.log("-----------");
    }

    if (req == "add") {
        let task = prompt("please enter your task to add");
        todo.push(task);
        console.log(`"${task}" has been added to your todo list`);
    } else if (req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log(`task at index ${idx} has been deleted`);
    }
    else {
        console.log("invalid request");
    }

    req = prompt("please enter your request");
}
