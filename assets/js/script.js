document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons){
    button.addEventListener("click", function(){
      if (this.getAttribute("data-type") === "submit"){
       checkAnswer();
    }else{
         let gameType = this.getAttribute("data-type");  
         alert(`You clicked ${gameType}`)    
         runGame(gameType);     
    }  
    });
  }

runGame("addition");

});

/**
 * the main game loop 
 */

function runGame(gameType){
let num1 = Math.floor(Math.random() *25)+1; 
let num2 = Math.floor(Math.random() *25)+1; 
  
 if (gameType === "addition"){
      displayAdditionQuestion(num1,num2);
 }else if (gameType === 'multiply'){
      dispalyMultiplyQuestion(num1, num2);
}else if(gameType === 'subtract'){
  dispalySubtractQuestion(num1,num2)
}else if (gameType === 'division'){
displayDivideQuestion(num1, num2)
}else{
   alert(`Unknown game type: ${gameType}`);
   throw `unknown game type: ${gameType}. Aborting `;

 }

}


/*** checks answer against first element in the returned 
 * calculatedCorrectAnswerArray
 */
function checkAnswer(){

  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect){
    alert("Hey! you got it right :D");
    incrementScore();

  } else{
    alert(`awww... you answered ${userAnswer}. the correct answer was ${calculatedAnswer[0]}!`);
    incrementWrongAnswer();
  }

  runGame(calculatedAnswer[1]);

}
/**get the operands and the operators directly from the dom a
 * and returns the correct answer
  */
function calculateCorrectAnswer(){
let operand1 = parseInt(document.getElementById('operand1').innerText);
let operand2 = parseInt(document.getElementById("operand2").innerText);
let operator = document.getElementById("operator").innerText;

if (operator === '+'){
  return [operand1 + operand2, "addition"];
}else if (operator === 'x'){
  return[operand1 * operand2, "multiply"];
}else if (operator === '-'){
  return[operand1 - operand2, 'subtract'];
}else if (operator === '/'){
  return[operand1 / operand2, 'division']
}else{
  alert(`unimplemented operator ${operator}`)
  throw `unimplemented operator ${operator}. Aborting`

}


}
/**
 * gets current score from dom
 */
function incrementScore(){
  let  oldscore = parseInt(document.getElementById('score').innerText); 
  document.getElementById('score').innerText = ++oldscore;

}
/**
 * updates incorrcect 
 */

function incrementWrongAnswer() {
  let  oldscore = parseInt(document.getElementById('incorrect').innerText); 
  document.getElementById('incorrect').innerText = ++oldscore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1;
    document.getElementById(`operand2`).textContent = operand2;
    document.getElementById(`operator`).textContent = "+";
}

function dispalySubtractQuestion(operand1, operand2) {
  document.getElementById(`operand1`).textContent = operand1 > operand2 ? operand1 : operand2
    document.getElementById(`operand2`).textContent = operand1 >operand1 ? operand2 : operand1
    document.getElementById(`operator`).textContent = "-";

   
}
    


function dispalyMultiplyQuestion(operand1, operand2){
  document.getElementById(`operand1`).textContent = operand1;
  document.getElementById(`operand2`).textContent = operand2;
  document.getElementById(`operator`).textContent = "x";
}




function displayDivideQuestion(operand1,operand2){
  document.getElementById(`operand1`).textContent = operand1 > operand2 ? operand1 : operand2
  document.getElementById(`operand2`).textContent = operand1 > operand2 ? operand2 : operand1
  document.getElementById(`operator`).textContent = "/";

}