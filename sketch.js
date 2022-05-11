//global variables
//let radio = [20];
let Ex = 0;
let In = 0;
let Se = 0;
let Nt = 0;
let Th = 0;
let Fe = 0;
let Ju = 0;
let Pe = 0;

function setup() {
  createCanvas(1000, 3000);
  background(255);

  textSize(50);
  fill(0);
}

/*class Q {
  constructor(number, question, tag) {
    this.number = number;
    this.question = question;
    this.tag = tag;
  }
}*/

/*class Questions {
  constructor() {
    this.questions = [];
    this.radios = [];
  }
  newQuestion(number, question, tag) {
    let q = new Q(number, question, tag);
    this.questions.push(q);
    return q;
  }
}*/

/*
let quest = new Questions();
quest.newQuestion(1, "You regularly make new friends", "E");
quest.newQuestion(
  2,
  "You spend a lot of your free time exploring various random topics that pique your interest",
  "S"
);
quest.newQuestion(
  3,
  "Seeing other people cry can easily make you feel like you want to cry too",
  "F"
);
quest.newQuestion(4, "You often make a backup plan for a backup plan", "T");
quest.newQuestion(
  5,
  "You usually stay calm, even under a lot of pressure",
  "T"
);
quest.newQuestion(
  6,
  "At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know",
  "I"
);
quest.newQuestion(
  7,
  "You prefer to completely finish one project before starting another",
  "J"
);
quest.newQuestion(8, "You are very sentimental", "F");
quest.newQuestion(
  9,
  "You like to use organizing tools like schedules and lists",
  "J"
);
quest.newQuestion(
  10,
  "Even a small mistake can cause you to doubt your overall abilities and knowledge",
  "P"
);
quest.newQuestion(
  11,
  "You feel comfortable just walking up to someone you find interesting and striking up a conversation",
  "E"
);
quest.newQuestion(
  12,
  "You are not too interested in discussing various interpretations and analyses of creative works",
  "S"
);
quest.newQuestion(
  13,
  "You are more inclined to follow your head than your heart",
  "T"
);
quest.newQuestion(
  14,
  "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine",
  "P"
);
quest.newQuestion(
  15,
  "You rarely worry about whether you make a good impression on people you meet",
  "E"
);
quest.newQuestion(16, "You enjoy participating in group activities", "E");
quest.newQuestion(
  17,
  "You like books and movies that make you come up with your own interpretation of the ending",
  "N"
);
quest.newQuestion(
  18,
  "Your happiness comes more from helping others accomplish things than your own accomplishments",
  "E"
);
quest.newQuestion(
  19,
  "You are interested in so many things that you find it difficult to choose what to try next",
  "S"
);
quest.newQuestion(
  20,
  "You are prone to worrying that things will take a turn for the worse",
  "F"
);
quest.newQuestion(21, "You are definitely not an artistic type of person", "I");
quest.newQuestion(22, "You avoid leadership roles in group settings", "J");
quest.newQuestion(
  23,
  "You think the world would be a better place if people relied more on rationality and less on their feelings",
  "T"
);
quest.newQuestion(
  24,
  "You prefer to do your chores before allowing yourself to relax",
  "J"
);
quest.newQuestion(25, "You enjoy watching people argue", "S");
quest.newQuestion(26, "You tend to avoid drawing attention to yourself", "I");
quest.newQuestion(27, "Your mood can change very quickly", "F");
quest.newQuestion(
  28,
  "You lose patience with people who are not as efficient as you",
  "J"
);
quest.newQuestion(
  29,
  "You often end up doing things at the last possible moment",
  "P"
);
quest.newQuestion(
  30,
  "You have always been fascinated by the question of what, if anything, happens after death",
  "N"
);
quest.newQuestion(
  31,
  "You usually prefer to be around others rather than on your own",
  "E"
);
quest.newQuestion(
  32,
  "You become bored or lose interest when the discussion gets highly theoretical",
  "S"
);
quest.newQuestion(
  33,
  "You find it easy to empathize with a person whose experiences are very different from yours",
  "F"
);
quest.newQuestion(
  34,
  "You usually postpone finalizing decisions for as long as possible",
  "P"
);
quest.newQuestion(
  35,
  "You rarely second-guess the choices that you have made",
  "S"
);
quest.newQuestion(
  36,
  "After a long and exhausting week, a lively social event is just what you need",
  "E"
);
quest.newQuestion(37, "You enjoy going to art museums", "N");
quest.newQuestion(
  38,
  "You often have a hard time understanding other people’s feelings",
  "T"
);
quest.newQuestion(39, "You like to have a to-do list for each day", "J");
quest.newQuestion(40, "You rarely feel insecure", "E");
//something is off here number wise
quest.newQuestion(41, "You avoid making phone calls", "I");
quest.newQuestion(
  42,
  "You often spend a lot of time trying to understand views that are very different from your own",
  "N"
);
quest.newQuestion(
  43,
  "In your social circle, you are often the one who contacts your friends and initiates activities",
  "E"
);
quest.newQuestion(
  44,
  "If your plans are interrupted, your top priority is to get back on track as soon as possible",
  "J"
);
quest.newQuestion(
  45,
  "You are still bothered by mistakes that you made a long time ago",
  "J"
);
quest.newQuestion(
  46,
  "You rarely contemplate the reasons for human existence or the meaning of life",
  "S"
);
quest.newQuestion(
  47,
  "Your emotions control you more than you control them",
  "F"
);
quest.newQuestion(
  48,
  "You take great care not to make people look bad, even when it is completely their fault",
  "F"
);
quest.newQuestion(
  49,
  "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts",
  "P"
);
quest.newQuestion(
  50,
  "When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you",
  "N"
);
quest.newQuestion(
  51,
  "You would love a job that requires you to work alone most of the time",
  "I"
);
quest.newQuestion(
  52,
  "You believe that pondering abstract philosophical questions is a waste of time",
  "S"
);
quest.newQuestion(
  53,
  "You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places",
  "E"
);
quest.newQuestion(54, "You know at first glance how someone is feeling", "F");
quest.newQuestion(55, "You often feel overwhelmed", "F");
quest.newQuestion(
  56,
  "You complete things methodically without skipping over any steps",
  "J"
);
quest.newQuestion(
  57,
  "You are very intrigued by things labeled as controversial",
  "N"
);
quest.newQuestion(
  58,
  "You would pass along a good opportunity if you thought someone else needed it more",
  "F"
);
quest.newQuestion(59, "You struggle with deadlines", "P");
quest.newQuestion(
  60,
  "You feel confident that things will work out for you",
  "N"
);

function DisplayQuestions() {
  var QCount = 0;
  var counter = 0;

//document.getElementById("Q1").innerHTML = "Bonjour";

  while (QCount < 20) {
    var QNumber = Math.round(60 * Math.random());
    var location = 100 + counter;

    if (null != quest.questions[QNumber]) {
      let tag = quest.questions[QNumber].tag;
      visibleQs.push(tag);
      
      text(
        "Q" + (QCount + 1) + " : " + quest.questions[QNumber].question,
        10,
        location
      );

      quest.questions[QNumber] = null; // Dump this question - it's been displayed

      QCount++;
      counter += 100;
    }
  }
  //exit();
}
*/
function draw() {
  textSize(16);
  let loc = 100;
  noLoop();
    loc += 20;
}

function stopColors()
{
document.getElementById('demo').style.display='block'
}

function countTag(name, value) {
  let i =0;

  print(runCount, visibleQs[name], 50 + (runCount*10), 1100)
 // }
  
  if (runCount < 20) {
    if (visibleQs[name] == "E" && value == "a") {
      Ex++;
    }
    if (visibleQs[name] == "E" && value == "d") {
      In++;
    }
  
    if (visibleQs[name]== "I" && value == "a") {
      In++;
    }
    if (visibleQs[name] == "I" && value == "d") {
      Ex++;
    }
  
    if (visibleQs[name] == "S" && value == "a") {
      Se++;
    }
    if (visibleQs[name] == "S" && value == "d") {
      Nt++;
    }
    
    if (visibleQs[name] == "N" && value == "a") {
      Nt++;
    }
    if (visibleQs[name] == "N" && value == "d") {
      Se++;
    }
    
    if (visibleQs[name] == "T" && value == "a") {
      Th++;
    }
    if (visibleQs[name] == "T" && value == "d") {
      Fe++;
    }
  
    if (visibleQs[name] == "F" && value == "a") {
      Fe++;
    }
    if (visibleQs[name] == "F" && value == "d") {
      Th++;
    }
  
    if (visibleQs[name] == "J" && value == "a") {
      Ju++;
    }

    if (visibleQs[name] == "J" && value == "d") {
      Pe++;
    }
  
    if (visibleQs[name] == "P" && value == "a") {
      Pe++;
    }
    if (visibleQs[name] == "P" && value == "d") {
      Ju++;
    }
  
    drawArt();
    
  runCount++;
  }
}

function drawArt() {

  if (Ex>=In && Se>=Nt && Th>=Fe && Ju>=Pe)//ESTJ Executive
  {
    fill(255,179,186);
    square(0, 0, 500);
  }
  
  if (Ex>=In && Se>=Nt && Th>=Fe && Ju<=Pe)//ESTP Entrepreneur
  {
    fill(186,255,201);
    square(0, 0, 500);
  }
  
  if (Ex>=In && Se>=Nt && Th<=Fe && Ju>=Pe)//ESFJ Consul
  {
    fill(255,223,186);
    square(0, 0, 500);
  }
  
  if (Ex>=In && Se>=Nt && Th<=Fe && Ju<=Pe)//ESFP Entertainer
  {
    fill(255,255,186);
    square(0, 0, 500);
  }
  
  if (Ex>In && Se<=Nt && Th>=Fe && Ju>=Pe)//ENTJ Commander
  {
    fill(161,237,4);
    square(0, 0, 500);
  }
  
  if (Ex==In && Se<Nt && Th>Fe && Ju>=Pe)//ANTJ 
  {
    fill(100, 175, 120)
    square(0, 0, 500)
  }
  
  if (Ex>In && Se<=Nt && Th>=Fe && Ju>=Pe)//ENTP Debater 
  {
    fill(65,0,108);
    square(0, 0, 500);
  }
  
  if (Ex==In && Se<=Nt && Th>=Fe && Ju<=Pe)//ANTP
  {
    fill(50, 0, 70);
    square(0, 0, 500);
  }
  
  if (Ex>In && Se<=Nt && Th<=Fe && Ju>=Pe)//ENFJ Protagonist
  {
    fill(22,117,113);
    square(0, 0, 500);
  }
  
  if (Ex==In && Se<=Nt && Th<=Fe && Ju>=Pe)//ANFJ
  {
    fill(22, 105, 113);
    square(0, 0, 500);
  }
  
  if (Ex>In && Se<=Nt && Th<=Fe && Ju<=Pe)//ENFP Campaigner
  {
    fill(254,100,67);
    square(0, 0, 500);
  }
  
  if (Ex==In && Se<=Nt && Th<=Fe && Ju<=Pe)//ANFP
  {
    fill(210, 100, 67);
    square(0, 0, 500);
    
  }
  
  if (Ex<=In && Se>=Nt && Th>=Fe && Ju>=Pe)//ISTJ Logistician
  {
    fill(135,15,28);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se>=Nt && Th>=Fe && Ju<=Pe)//ISTP Virtuoso
  { 
    fill(218,129,59);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se>=Nt && Th<=Fe && Ju>=Pe)//ISFJ Defender
  {
    fill(12,35,83);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se>=Nt && Th<=Fe && Ju<=Pe)//ISFP Adventurer
  {
    fill(243,232,133);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se<=Nt && Th>=Fe && Ju>=Pe)//INTJ Architect
  { 
    fill(43,60,4);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se<=Nt && Th>=Fe && Ju<=Pe)//INTP Logician
  {
    fill(186,214,255);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se<=Nt && Th<=Fe && Ju>=Pe)//INFJ Advocate
  {
    fill(116,27,71);
    square(0, 0, 500);
  }
  
  if (Ex<=In && Se<=Nt && Th<=Fe && Ju<=Pe)//INFP Mediator
  {
    fill(130,169,176);
    square(0, 0, 500);
  }
  
 /* 
  let i=0;
  for(i=0; i<Ex; i+20)
    line(In+i, In, In+i, In);
  */
  /*
  for(i=0;i<Se;i+20)
    circle(Nt+i, Nt+i, Se);
  */
    
  if (Ex>In)
    line(0, Ex*100, 500, 20);
  if (Ex==In)
    line(Ex*100, Ex*100, In*2, Ex*100);
  if (Ex<In)
    line(In*100, 100, In*2, 100);
    
  if (Se>Nt)
    line(100, 100*Se, 100, Se*50);
  if (Se==Nt)
    line(100, 100*Se, 100, Nt*50);
  if (Se<Nt)
    line(100, 100*Nt, 100, Nt*50);
    
  if (Th>Fe)
    square(Th*100, Th*100, Th*100);
  if (Th==Fe)
    circle(Th*100, Th*100, Fe*100);
  if (Th<Fe)
    circle(Fe*100, Fe*100, Fe*100);
    
  if (Ju>Pe)
    triangle(Ju*100, Ju*100, Ju*100, Ju*100, Ju*300, Ju*300);
  if (Ju==Pe)
    line(10, 10, 10, 10);
  if (Ju<Pe)
    triangle(Pe*50, Pe*50, Pe*100, Pe*100, Pe*100, Pe*100);
  
  //text("R:" + R + "G:" + G + "B:" + B, 50, 500);
  //background(R, G, B);
  /*
  text(runCount+1, 10, 2050);
  text("E:" + Ex, 10, 2100);
  text("I:" + In, 10, 2150);
  text("S:" + Se, 10, 2200);
  text("N:" + Nt, 10, 2250);
  text("T:" + Th, 10, 2300);
  text("F:" + Fe, 10, 2350);
  text("J:" + Ju, 10, 2400);
  text("P:" + Pe, 10, 2450);
  */
}