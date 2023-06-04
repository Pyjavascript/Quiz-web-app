/*main Element to show time*/
let timer = document.querySelector(".time");

let ts = document.querySelector(".ts");
let rec = document.querySelector(".rec");

/*variables storing second,minute, repeat time*/
let n = 60;
let min = 0;
let num = 0;

/*Game body*/
let body = document.querySelector(".body");
/*last page*/
let last = document.querySelector(".last");
/*defining function*/
function quiz_time(){
  /*minus 1 from n and show in the element with minutes*/
  n--;
  timer.innerText = min + ":" + n;
  /*if conditions for seconds and minutes*/
  if(n < 10){
    timer.innerText = min + ":" + "0" + n;
  }

  if(n < 1){
    num += 60;
    n = 0;
    timer.innerText = "0" + ":" + "0" + n;
    
  }

  /*ending intervals*/
  if(num == 60){
  body.style.display = "none";
  last.style.display = "flex";
  if(c_i < 50){
    ts.innerText = c_i;
    rec.innerText = "Great! but you should stydy more."
  }
  else if(c_i > 50){
    ts.innerText = c_i;
    rec.innerText = "Great! you have a great knowledge."
  }
  clearInterval(me)
  
}
}

/*Display none for main screen*/
body.style.display = "none";

/*load text and loading screen*/
let screen = document.querySelector(".load_screen");
let load_text = document.querySelector(".load_txt");
let button = document.querySelector(".button");

/*txt to be shown*/
let txt_list = ["This might take few seconds...","1 min timer to complete quiz...","Test your Knowledge...","Assets loaded..."];

/*total and now question number*/
let now_qn = document.querySelector(".qn-now");
let total_qn = document.querySelector(".t-qn");

/*this function will show text*/
let a = 0;
setInterval(show_txt,1500);
function show_txt(){
  load_text.style.animation = "op 1.5s infinite";
  load_text.innerText = txt_list[a];
  a++;
  if(a > 4){
    button.style.display = "block";
    load_text.innerText = txt_list[3];
    load_text.style.animation = "none";
  }
}
button.addEventListener("click",() => {
  screen.style.display = "none";
  body.style.display = "flex";
  setInterval(quiz_time,1000);
    q_n++;
    now_qn.innerText = q_n + 1;
    console.log(options[q_n].question);
    question.innerText = options[q_n].question;
    
    console.log(q_n)
    A.innerText = options[q_n].optn[0].text;
    B.innerText = options[q_n].optn[1].text;
    C.innerText = options[q_n].optn[2].text;
    D.innerText = options[q_n].optn[3].text;
  
})

/*list for questions and options*/
let options = [
  {
    id:1,
    question:"Which of the following is the largest animal in the world? ",
    optn: [
      {text:"Asian Elephant",
       iscorrect:false
      },{text:"Blue Whale",
       iscorrect:true
      },{text:"Giraffe",
       iscorrect:false
      },{text:"Gray Whale",
       iscorrect:false
      }
      ]
  },
  {
    id:2,
    question:"Name the largest ocean in the world",
    optn: [
      {text:"Atlantic Ocean",
       iscorrect:false
      },{text:"Indian Ocean",
       iscorrect:false
      },{text:"Pacific Ocean",
       iscorrect:true
      },{text:"Southern Ocean",
       iscorrect:false
      }
      ]
  },
  {
    id:3,
    question:"Which of the following is the largest airport in the world? ",
    optn: [
      {text:"King Fahd International Airport",
       iscorrect:true
      },{text:"Beijing Airport",
       iscorrect:false
      },{text:"Los Angeles Airport",
       iscorrect:false
      },{text:"Tokyo Airport",
       iscorrect:false
      }
      ]
  },{
    id:4,
    question:"'OS' computer abbreviation usually means ?",
    optn: [
      {text:"Order of Significance",
       iscorrect:false
      },{text:"Open Software",
       iscorrect:false
      },{text:"Operating System",
       iscorrect:true
      },{text:"Optical Sensor",
       iscorrect:false
      }
      ]
  },{
    id:5,
    question:"Indian to beat the computers in mathematical wizardry is",
    optn: [
      {text:"Ramanujam",
       iscorrect:false
      },{text:"Rina Panigrahi",
       iscorrect:false
      },{text:"Raja Ramanna",
       iscorrect:false
      },{text:"Shakunthala Devi",
       iscorrect:true
      }
      ]
  },{
    id:6,
    question:"Power to decide an election petition is vested in the",
    optn: [
      {text:"Parliament",
       iscorrect:false
      },{text:"Supreme Court",
       iscorrect:false
      },{text:"High courts",
       iscorrect:true
      },{text:"Election Commission",
       iscorrect:false
      }
      ]
  },{
    id:7,
    question:"Great Victoria Desert is located in",
    optn: [
      {text:"Canada",
       iscorrect:false
      },{text:"West Africa",
       iscorrect:false
      },{text:"Australia",
       iscorrect:true
      },{text:"North America",
       iscorrect:false
      }
      ]
  },{
    id:8,
    question:"Absorption of ink by blotting paper involves",
    optn: [
      {text:"viscosity of ink",
       iscorrect:false
      },{text:"capillary action phenomenon",
       iscorrect:true
      },{text:"diffusion of ink through the blotting",
       iscorrect:false
      },{text:"siphon action",
       iscorrect:false
      }
      ]
  },{
    id:9,
    question:"Most electronegative element among the following is",
    optn: [
      {text:"sodium",
       iscorrect:false
      },{text:"bromine",
       iscorrect:false
      },{text:"fluorine",
       iscorrect:true
      },{text:"oxygen",
       iscorrect:false
      }
      ]
  },{
    id:10,
    question:"Metal used to recover copper from a solution of copper sulphate is",
    optn: [
      {text:"Na",
       iscorrect:false
      },{text:"Ag",
       iscorrect:false
      },{text:"Hg",
       iscorrect:false
      },{text:"Fe",
       iscorrect:true
      }
      ]
  }
  ];
let score = document.querySelector(".Score");
let q_n = -1;
let c_i = 0;

let question = document.querySelector(" .question_txt");
let A = document.querySelector(".opt_A");
let B = document.querySelector(".opt_B");
let C = document.querySelector(".opt_C");
let D = document.querySelector(".opt_D");

let cont_A = document.querySelector(".cont_A");
let cont_B = document.querySelector(".cont_B");
let cont_C = document.querySelector(".cont_C");
let cont_D = document.querySelector(".cont_D");

button.addEventListener("click",() => {

})
function next(){
  if(q_n < 9){
    q_n++;
    now_qn.innerText = q_n + 1;
    question.innerText = options[q_n].question;
    A.innerText = options[q_n].optn[0].text;
    B.innerText = options[q_n].optn[1].text;
    C.innerText = options[q_n].optn[2].text;
    D.innerText = options[q_n].optn[3].text;

  cont_A.style.background = "#fff";
  A.style.color = "#000";
  cont_B.style.background = "#fff";
  B.style.color = "#000";
  cont_C.style.background = "#fff";
  C.style.color = "#000";
  cont_D.style.background = "#fff";
  D.style.color = "#000";
  }
  else{
    q_n = -1;
    console.log(q_n)
    body.style.display = "none";
    last.style.display = "flex";
    if(c_i < 50){
      ts.innerText = c_i;
      rec.innerText = "Great! but you should stydy more."
      console.log("50")
    }
    else if(c_i > 50){
      ts.innerText = c_i;
      rec.innerText = "Great! you have a great knowledge."
      console.log("100")
    }
  }
}
cont_A.addEventListener("click", () => {
  setTimeout( function() { next(); }, 1000);
  if(options[q_n].optn[0].iscorrect == true){
    cont_A.style.background = "green"
    A.style.color = "#fff";
    c_i += 10;
    score.innerText = c_i;
  }
  else{
  c_i = c_i;
  cont_A.style.background = "red";
  A.style.color = "#fff";
  }
});
cont_B.addEventListener("click", () => {
  setTimeout( function() { next(); }, 1000);
  if(options[q_n].optn[1].iscorrect == true){
    cont_B.style.background = "green"
    B.style.color = "#fff";
    c_i += 10;
    score.innerText = c_i;
  }
  else{
    c_i = c_i;
    cont_B.style.background = "red"
    B.style.color = "#fff";
  }
  
  });
  cont_C.addEventListener("click", () => {
  setTimeout( function() { next(); }, 1000);
  if(options[q_n].optn[2].iscorrect == true){
    cont_C.style.background = "green"
    C.style.color = "#fff";
    c_i += 10;
    score.innerText = c_i;
  }
  else{
    c_i = c_i;
    cont_C.style.background = "red"
    C.style.color = "#fff";
  }
  
  });
  cont_D.addEventListener("click", () => {
  setTimeout( function() { next(); }, 500);
  if(options[q_n].optn[3].iscorrect == true){
    cont_D.style.background = "green"
    D.style.color = "#fff";
    c_i += 10;
    score.innerText = c_i;
  }
  else{
    c_i = c_i;
    cont_D.style.background = "red"
    D.style.color = "#fff";
  }
});
