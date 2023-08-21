const time = 5000;

const $glitchStopper = document.getElementById("glitch");

if (!$glitchStopper) throw new Error("GlitchStopper not found");

let timeoutPageLoad;

const resetTimeout = () => {
  clearTimeout(timeoutPageLoad);
  timeoutPageLoad = setTimeout(() => {
    $glitchStopper.classList.add("hide");
  }, time);
};

resetTimeout();

$glitchStopper?.addEventListener("mouseover", function () {
  $glitchStopper.classList.remove("hide");
  resetTimeout();
});

const focusOn = document.querySelector("#aboutme");
const focusOnMe = document.querySelector("#p");
const headerDeleter = document.querySelector(".header-wrapper");
const logoDeleter = document.querySelector(".logos");
const focusOnWhole = document.body;

//TIMER
const timerDisplay = document.querySelector("#timer");
let countdown = 35;
let timerInterval;

focusOn.addEventListener("mouseenter", () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = countdown;

  timerInterval = setInterval(() => {
    countdown -= 1;

    if (countdown <= 33) {
      timerDisplay.style.display = "none";
    }

    if (countdown <= 5) {
      timerDisplay.style.display = "block";
    }

    if (countdown === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Need more time? Click again, please!!!";

      setTimeout(() => {
        timerDisplay.style.display = "none";
        countdown = 35;
      }, 3000);
    } else {
      timerDisplay.textContent = countdown;
    }
  }, 1000);
});

document.addEventListener("click", () => {
  timerDisplay.textContent = "";
});

if (!focusOnMe) throw new Error("FocusOnMe not found");

focusOn?.addEventListener("mouseenter", () => {
  headerDeleter.style.display = "none";
  logoDeleter.style.display = "none";
  focusOnWhole.style.backgroundImage = "initial";
  focusOnWhole.style.backgroundColor = "black";
  focusOnMe.style.color = "tomato";

  if (timeoutPageLoad) {
    clearTimeout(timeoutPageLoad);
  }

  timeoutPageLoad = setTimeout(() => {
    headerDeleter.style.display = "block";
    logoDeleter.style.display = "flex";
    focusOnWhole.style.backgroundImage =
      "url('https://scriptsender.com/wp-content/uploads/impossible-landing-page-background.jpg')";
    focusOnWhole.style.backgroundColor = "initial";
    focusOnMe.style.color = "black";
  }, 35000);
});

// SIDEBAR //
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const whoAmI = document.getElementById("whoAmI");

if (!sidebar || !toggleBtn || !whoAmI) {
  throw new Error("Required element not found");
}

const isSidebarOpen = localStorage.getItem("sidebarOpen") === "true";

sidebar.classList.toggle("open", isSidebarOpen);
if (isSidebarOpen) {
  toggleBtn.classList.replace("fa-chevron-left", "fa-xmark");
  whoAmI.style.display = "block";
} else {
  toggleBtn.classList.replace("fa-xmark", "fa-chevron-left");
  whoAmI.style.display = "none";
}

toggleBtn?.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  const isOpen = sidebar.classList.contains("open");

  localStorage.setItem("sidebarOpen", isOpen.toString());

  if (isOpen) {
    toggleBtn.classList.replace("fa-chevron-left", "fa-xmark");
    whoAmI.style.display = "block";
  } else {
    toggleBtn.classList.replace("fa-xmark", "fa-chevron-left");
    whoAmI.style.display = "none";
  }
});
