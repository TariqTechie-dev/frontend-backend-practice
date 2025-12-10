let color = "red";

switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("too much trafic");
}

let day = "sunday";
switch (day) {
  case "monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("Midweek grind");
    break;
  default:
    console.log("Invalid day");
}
