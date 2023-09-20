const cardArray = document.getElementsByClassName("out-num");
const randomArray = [];
const answerArray = [];
const numRandom = 5;
const maxRandom = 99;
const btn = document.querySelector("button");
const out = document.querySelector("h1");

let i = 0;
let message;

reset();

btn.addEventListener('click', play);


function play(){

while(i < numRandom){
  randomArray[i] = randomizer(0,maxRandom);
  cardArray[i].innerHTML = randomArray[i];
  i++;
}
i = 0;

out.innerHTML = "Simon said..."
btn.innerHTML = "Reset";
btn.removeEventListener('click', play);
btn.addEventListener('click', reset);

setTimeout(answer, 5000);


console.log(randomArray,cardArray);

}


function answer(){
  


  console.log("secondi 5");
  
  while(i < numRandom){
    
    cardArray[i].innerHTML = `
    <i class="fa-solid fa-xmark"></i>
    `;
    
    i++;
  }
  i = 0;

  out.innerHTML = "You said..."
  
  setTimeout(askPrompt, 100);

  
  console.log(answerArray,"ans");
}


function askPrompt(){
  
  while(i < numRandom){
    
    answerArray[i] = parseInt(prompt((i + 1) + " numero"));
    
    i++;
  }
  i = 0;

  message = (answerArray.toString() == randomArray.toString()) ? "HAI VINTO" : "HAI PERSO" ;
  out.innerHTML = message;
}


function reset(){
  
  while(i < numRandom){
    
    cardArray[i].innerHTML = `
    <i class="fa-solid fa-xmark"></i>
    `;
    
    i++;
  }
  i = 0;

  out.innerHTML = "Generate numbers"
  randomArray.splice(0,randomArray.length);
  answerArray.splice(0,answerArray.length);
  btn.innerHTML = "Play";
  btn.removeEventListener('click', reset);
  btn.addEventListener('click', play);

  console.log(answerArray,randomArray);
  
}


function randomizer(min,max){
  return Math.ceil(Math.random() * (max - min) + min);
}