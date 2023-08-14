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