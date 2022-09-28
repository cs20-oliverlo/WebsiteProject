//New version of tabs on about page that uses event listeners
let tablinks = document.getElementsByClassName("tablinks")
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function() {newChar(i);});
}

function newChar(tabValue) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab
  let tabName = tablinks[tabValue].innerHTML;
  document.getElementById(tabName).style.display = "block";
}

// Quizizzito

// Button Event Listener
document.getElementById("checkButton").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let testScore = 0;
  let answer1 = document.getElementById("ans1-in").value.toLowerCase();
  let answer2 = document.getElementById("ans2-in").value.toLowerCase();
  let answer3 = document.getElementById("ans3-in").value.toLowerCase();
  let answer4 = document.getElementById("ans4-in").value.toLowerCase();
  let answer5 = document.getElementById("ans5-in").value.toLowerCase();
  let answer6 = document.getElementById("ans6-in").value.toLowerCase();

  // If Statement - Test the input
  if (answer1 === "hakita" || answer1 === "pitr") {
    testScore++;
  }
  
  // If Statement - Test the input
  if (answer2 === "v1") {
    testScore++;
  }
  
  // If Statement - Test the input
  if (answer3 === "wall jumping" || answer3 === "wall sliding") {
    testScore++;
  }
  
  // If Statement - Test the input
  if (answer4 === "hakita" || answer4 === "pitr") {
    testScore++;
  }
  
  // If Statement - Test the input
  if (answer5 === "hakita" || answer5 === "pitr") {
    testScore++;
  }
  
  // If Statement - Test the input
  if (answer6 === "hakita" || answer6 === "pitr") {
    testScore++;
  }
}