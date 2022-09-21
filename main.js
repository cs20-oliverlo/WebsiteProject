// Weapon Tabs
let tabs = document.querySelectorAll(".tabs button");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("tabcontent");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("tabcontent");
    });
    tabContents[index].classList.add("tabcontent");
    tabs[index].classList.add("tabcontent");
  });
});

  // Quizizzito
  