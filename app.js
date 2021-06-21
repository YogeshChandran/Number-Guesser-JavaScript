const number = document.getElementById('number');
const submitbtn = document.getElementById('btn')
const guessnumber = Math.floor(Math.random()*100);
console.log(guessnumber);
let guesslimit = 5;
submitbtn.addEventListener('click' ,eventfun)

function eventfun(e){
  const number1 = number.value;
  console.log(number1);
  if(Number(number1) === guessnumber ){
    document.getElementById('result').innerHTML = `Your Guessing Was Right! Your Number is ${guessnumber}`;
  }
  else{
    if(Number(number1) > guessnumber){
      document.getElementById('result').innerHTML = `You Guessed Too High! ${guesslimit} Attempts Remaining`;
      console.log(guesslimit);
    }
    else if(Number(number1) < guessnumber){
      document.getElementById('result').innerHTML = `You Guessed Too Low! ${guesslimit} Attempts Remaining`;
      console.log(guesslimit);
    }
  }
    if(guesslimit === 0){
    document.getElementById('result').innerHTML = `Oops! Gameover  `;
    submitbtn.disabled = true ;
}
  guesslimit -= 1;
  e.preventDefault();
}