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

const focusOn = document.getElementById("aboutme");
const focusOnMe = document.getElementById("p");

if (!focusOnMe) throw new Error("FocusOnMe not found");

focusOn?.addEventListener("mouseenter", () => {
  focusOnMe.style.color = "orange"

if (timeoutPageLoad) {
  clearTimeout(timeoutPageLoad);
}

timeoutPageLoad = setTimeout(() => {
  focusOnMe.style.color = "black"
}, 25000)
})

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
