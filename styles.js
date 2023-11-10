//Testing Page
//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
amount (400)
function finalAmount();
let amount = 1.15;
let roundedfinalAmount = R.toFixed(2);
console.log('The amount after tax is' + amount);

//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;

function compareAndDisplayLarger(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " is larger.");
    } else if (num2 > num1) {
      console.log(num2 + " is larger.");
    } else {
      console.log("Both numbers are equal.");
    }
  }

  compareAndDisplayLarger(firstNum, secondNum);

// write a condtional statement to check whether someone qualifies for their driver's lisence(18), 
// learner's lisence(16) and/or if they dont qualify at all. all 3 possibilities should be accounted for
if (age>=18){
  console.log("Qualify for drivers license: ");
}else if (age >=16){
  console.log("Qualify for learner's license:");
}else {
  console.log("You do not qualify for any license");
}