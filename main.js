// Weapon TabsweaponName
let tablinks = document.getElementsByClassName("tablinks")
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", tabFunc);
}

function tabFunc() {
    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.querySelectorAll(".tablinks button");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(weaponName).style.display = "block";
    evt.currentTarget.className += " active";
}

  // Quizizzito
  