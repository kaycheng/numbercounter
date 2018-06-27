function addition(){
  var ourAnswer = document.getElementById("answer").value;
  isNaN(ourAnswer);
  if (isNaN(ourAnswer)){
    document.getElementById("output").innerHTML = "Hey! " + ourAnswer + " is not a number!";
  } else {
    if (ourAnswer == correctAnswer){
      document.getElementById("output").innerHTML = "Correct! " + numOne + " + " + numTwo + " = " + correctAnswer;
    } else {
      document.getElementById("output").innerHTML = "Incorrect! " + numOne + " + " + numTwo + " = " + correctAnswer + ", not " + ourAnswer;
    }
  }
}

function reset(){
  document.getElementById("answer").value = "";
  document.getElementById("output").innerHTML = "";
  numOne = Math.floor(Math.random() * 10) + 1;
  numTwo = Math.floor(Math.random() * 10) + 1;
  document.getElementById("demo").innerHTML = numOne + " + " + numTwo;
  correctAnswer = numOne + numTwo;
}

