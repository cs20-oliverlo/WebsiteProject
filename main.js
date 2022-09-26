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