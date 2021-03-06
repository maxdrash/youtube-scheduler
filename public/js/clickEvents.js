
var programmeVisible = false;

function toggleProgrammeVisibility() {
  if (programmeVisible) {
    document.querySelector(".programme").classList.add("programme--hidden");
    document.querySelector(".toggle-programme").classList.remove("toggle-programme--active");
    programmeVisible = false;
  } else {
    document.querySelector(".programme").classList.remove("programme--hidden");
    document.querySelector(".toggle-programme").classList.add("toggle-programme--active");
    programmeVisible = true;
  }
}

function toggleTheme() {
  if (document.body.classList.contains("retro-theme")) {
    document.body.className = "";
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else if (document.body.classList.contains("dark-theme")) {
    document.body.className = "";
    document.body.classList.add("retro-theme");
    localStorage.setItem("theme", "retro-theme");
  }
}

function currentVideoChanged() {
  var current = document.querySelector(".schedule-row--current");
  current.classList.remove("schedule-row--current");
  current.classList.add("schedule-row--past");

  const next = current.nextElementSibling;
  if (!next) {
    console.error("No next item in schedule");
    return;
  }
  next.classList.add("schedule-row--current");
  next.querySelector(".schedule-row__time").innerText = "NOW: ";
}


