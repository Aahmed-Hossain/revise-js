var color = "yellow";

if (color === "green") {
  console.log("you are my green firend");
} else if (color === "red") {
  console.log("you are my red firend");
} else if (color === "yellow") {
  console.log("you are my yellow firend");
} else {
  console.log("you are  not my  firend");
}

switch (color) {
  case "green":
    console.log("you are my green firend");
    break;
  case "red":
    console.log("you are my red firend");
    break;
  case "yellow":
    console.log(" yellow firend");
    break;
  case "black":
    console.log("you r black");
    break;
    default:
        console.log('not my friend');
}
