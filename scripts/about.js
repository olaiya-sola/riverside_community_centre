// Font Size Control
let currentFontSize = 16;
const minFontSize = 12;
const maxFontSize = 24;

const fontIncrease = document.getElementById("font-increase");
const fontDecrease = document.getElementById("font-decrease");
const fontReset = document.getElementById("font-reset");
const srAnnouncement = document.getElementById("sr-announcement");

function updateFontSize() {
  document.documentElement.style.fontSize = currentFontSize + "px";

  // Save preference
  localStorage.setItem("fontSize", currentFontSize);

  // Announce to screen readers
  srAnnouncement.textContent = `Font size changed to ${currentFontSize} pixels`;
}

fontIncrease.addEventListener("click", () => {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 2;
    updateFontSize();
  }
});

fontDecrease.addEventListener("click", () => {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 2;
    updateFontSize();
  }
});

fontReset.addEventListener("click", () => {
  currentFontSize = 16;
  updateFontSize();
});

// Load saved font size preference
const savedFontSize = localStorage.getItem("fontSize");
if (savedFontSize) {
  currentFontSize = parseInt(savedFontSize);
  document.documentElement.style.fontSize = currentFontSize + "px";
}

// High Contrast Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function toggleTheme() {
  const isHighContrast = body.classList.toggle("high-contrast");
  themeToggle.setAttribute("aria-pressed", isHighContrast);

  // Save preference
  localStorage.setItem("theme", isHighContrast ? "high-contrast" : "normal");

  // Announce to screen readers
  srAnnouncement.textContent = isHighContrast
    ? "High contrast mode enabled"
    : "High contrast mode disabled";
}

themeToggle.addEventListener("click", toggleTheme);

// Load saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "high-contrast") {
  body.classList.add("high-contrast");
  themeToggle.setAttribute("aria-pressed", "true");
}
