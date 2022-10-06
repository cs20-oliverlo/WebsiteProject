//New version of tabs on about page that uses event listeners
let tablinks = document.getElementsByClassName("tablinks")
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function() {newWeapon(i);});
}

function newWeapon(tabValue) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab
  let tabName = tablinks[tabValue].innerHTML;
  document.getElementById(tabName).style.display = "block";
}

// Button Event Listener
document.getElementById("checkButton").addEventListener("click", btnClicked);

// Quiz Variable
let rank = document.getElementById("rank");
let pRank = document.getElementById("rank-p");
let sRank = document.getElementById("rank-s");
let aRank = document.getElementById("rank-a");
let bRank = document.getElementById("rank-b");
let cRank = document.getElementById("rank-c");
let dRank = document.getElementById("rank-d");

function btnClicked() {
  let testScore = 0;
  let answer1 = document.getElementById("ans1-in").value.toLowerCase();
  let answer2 = document.getElementById("ans2-in").value.toLowerCase();
  let answer3 = document.getElementById("ans3-in").value.toLowerCase();
  let answer4 = document.getElementById("ans4-in").value.toLowerCase();
  let answer5 = document.getElementById("ans5-in").value.toLowerCase();
  let answer6 = document.getElementById("ans6-in").value.toLowerCase();

  if (answer1 === "hakita" || answer1 === "pitr") {
    testScore++;
  }
  
  if (answer2 === "v1") {
    testScore++;
  }
  
  if (answer3 === "wall jumping" || answer3 === "wall sliding" || answer3 === "dashing" || answer3 === "dash jumping" || answer3 === "sliding" || answer3 === "slide jumping" || answer3 === "ground slam" || answer3 === "skimming" || answer3 === "sliding on water" || answer3 === "rocket surfing" || answer3 === "rocket jumping" || answer3 === "slam storage") {
    testScore++;
  }
  
  if (answer4 === "marksman" || answer4 === "core" || answer4 === "pump" || answer4 === "attractor" || answer4 === "overheat" || answer4 === "electric" || answer4 === "screwdriver" || answer4 === "malicious" || answer4 === "freeze frame") {
    testScore++;
  }
  
  if (answer5 === "2") {
    testScore++;
  }
  
  if (answer6 === "d" || answer6 === "c" || answer6 === "b" || answer6 === "a" || answer6 === "s" || answer6 === "ss" || answer6 === "sss" || answer6 === "ultrakill") {
    testScore++;
  }

  document.getElementById("answers-right").innerHTML = Math.trunc(testScore * 100 / 6) + "%"

  // if (testScore === 6) {
  // pRank.style.display = "float";
  // sRank.style.display = "none";
  // aRank.style.display = "none";
  // bRank.style.display = "none";
  // cRank.style.display = "none";
  // dRank.style.display = "none";
  // rank.style.display = "none";
  // } else if (testScore === 5) {
  //   pRank.style.display = "none";
  //   sRank.style.display = "float";
  //   aRank.style.display = "none";
  //   bRank.style.display = "none";
  //   cRank.style.display = "none";
  //   dRank.style.display = "none";
  //   rank.style.display = "none";
  // } else if (testScore === 4) {
  //   pRank.style.display = "none";
  //   sRank.style.display = "none";
  //   aRank.style.display = "float";
  //   bRank.style.display = "none";
  //   cRank.style.display = "none";
  //   dRank.style.display = "none";
  //   rank.style.display = "none";
  // } else if (testScore === 3) {
  //   pRank.style.display = "none";
  //   sRank.style.display = "none";
  //   aRank.style.display = "none";
  //   bRank.style.display = "float";
  //   cRank.style.display = "none";
  //   dRank.style.display = "none";
  //   rank.style.display = "none";
  // } else if (testScore === 2) {
  //   pRank.style.display = "none";
  //   sRank.style.display = "none";
  //   aRank.style.display = "none";
  //   bRank.style.display = "none";
  //   cRank.style.display = "float";
  //   dRank.style.display = "none";
  //   rank.style.display = "none";
  // } else if (testScore === 1){
  //   pRank.style.display = "none";
  //   sRank.style.display = "none";
  //   aRank.style.display = "none";
  //   bRank.style.display = "none";
  //   cRank.style.display = "none";
  //   dRank.style.display = "float";
  //   rank.style.display = "none";
  // }
}


