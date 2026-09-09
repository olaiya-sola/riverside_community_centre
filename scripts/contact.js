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

// Contact Form Validation
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => (msg.textContent = ""));

  const errorInputs = document.querySelectorAll(".error");
  errorInputs.forEach((input) => {
    input.classList.remove("error");
    input.removeAttribute("aria-invalid");
  });
}

function showError(fieldId, message) {
  const errorElement = document.getElementById(fieldId + "-error");
  const inputElement = document.getElementById(fieldId);

  if (errorElement && inputElement) {
    errorElement.textContent = message;
    inputElement.classList.add("error");
    inputElement.setAttribute("aria-invalid", "true");
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Honour the operating system's reduced-motion preference.
// Read .matches at call time so a change mid-session is picked up.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  clearErrors();

  // Validate Name
  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    showError("name", "Please enter your name");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email");
  if (email.value.trim() === "") {
    showError("email", "Please enter your email address");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  // Validate Subject
  const subject = document.getElementById("subject");
  if (subject.value === "") {
    showError("subject", "Please select a subject");
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    showError("message", "Please enter your message");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError("message", "Message must be at least 10 characters long");
    isValid = false;
  }

  if (isValid) {
    form.style.display = "none";
    successMessage.style.display = "block";
    successMessage.focus();

    srAnnouncement.textContent =
      "Message sent successfully! We will respond within 1-2 business days.";

    window.scrollTo({
      top: document.getElementById("message-form-heading").offsetTop - 100,
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  } else {
    const firstError = document.querySelector(".error-message:not(:empty)");
    if (firstError) {
      const fieldId = firstError.id.replace("-error", "");
      const field = document.getElementById(fieldId);
      if (field) {
        field.focus();
        field.scrollIntoView({
          behavior: reduceMotion.matches ? "auto" : "smooth",
          block: "center",
        });
      }
    }

    const errorCount = document.querySelectorAll(
      ".error-message:not(:empty)",
    ).length;
    srAnnouncement.textContent = `Form has ${errorCount} error${errorCount > 1 ? "s" : ""}. Please correct the errors and try again.`;
  }
});

// Real-time validation
const emailInput = document.getElementById("email");
emailInput.addEventListener("blur", () => {
  const emailError = document.getElementById("email-error");
  if (emailInput.value.trim() !== "" && !validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("error");
    emailInput.setAttribute("aria-invalid", "true");
  } else if (validateEmail(emailInput.value)) {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    emailInput.removeAttribute("aria-invalid");
  }
});
