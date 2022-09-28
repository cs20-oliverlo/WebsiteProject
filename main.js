  // Tabs
  let tabs = document.querySelectorAll(".tabs button");
  let tabContents = document.querySelectorAll(".tabstuff div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents[index].classList.add("active");
      tabs[index].classList.add("active");
    });
  });

// Quizizzito

// HTML Variables
let testScore = +document.getElementById("answers-right");

// Button Event Listener
document.getElementById("checkButton").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("ans1-in").value.toLowerCase();
  let answer2 = document.getElementById("ans2-in").value.toLowerCase();
  let answer3 = document.getElementById("ans3-in").value.toLowerCase();
  let answer4 = document.getElementById("ans4-in").value.toLowerCase();
  let answer5 = document.getElementById("ans5-in").value.toLowerCase();
  let answer6 = document.getElementById("ans6-in").value.toLowerCase();

  // If Statement - Test the input
  if (answer1 === "hakita" || answer1 === "pitr") {
    testScore;
  } else () {

  }
}