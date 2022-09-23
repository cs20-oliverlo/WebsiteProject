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