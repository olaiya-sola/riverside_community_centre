// Font Size Control
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

  // Save preference
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

// Form Validation
const form = document.getElementById("registration-form");
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

function validatePhone(phone) {
  // Simple UK phone validation
  const cleaned = phone.replace(/\s/g, "");
  return /^0\d{10}$/.test(cleaned) || /^\+44\d{10}$/.test(cleaned);
}

function validateDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  return date < today;
}

// Honour the operating system's reduced-motion preference.
// Read .matches at call time so a change mid-session is picked up.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  clearErrors();

  // Validate Full Name
  const fullName = document.getElementById("full-name");
  if (fullName.value.trim() === "") {
    showError("full-name", "Please enter your full name");
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email");
  if (email.value.trim() === "") {
    showError("email", "Please enter your email address");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError(
      "email",
      "Please enter a valid email address (e.g., name@example.com)",
    );
    isValid = false;
  }

  // Validate Phone
  const phone = document.getElementById("phone");
  if (phone.value.trim() === "") {
    showError("phone", "Please enter your phone number");
    isValid = false;
  } else if (!validatePhone(phone.value)) {
    showError(
      "phone",
      "Please enter a valid UK phone number (e.g., 01234 567890)",
    );
    isValid = false;
  }

  // Validate Date of Birth
  const dob = document.getElementById("date-of-birth");
  if (dob.value === "") {
    showError("date-of-birth", "Please enter your date of birth");
    isValid = false;
  } else if (!validateDate(dob.value)) {
    showError("date-of-birth", "Date of birth must be in the past");
    isValid = false;
  }

  // Validate Program Selection
  const program = document.getElementById("program");
  if (program.value === "") {
    showError("program", "Please select a programme");
    isValid = false;
  }

  // Validate Membership Radio
  const membership = document.querySelector('input[name="membership"]:checked');
  if (!membership) {
    const membershipError = document.getElementById("membership-error");
    membershipError.textContent = "Please select your membership status";
    isValid = false;
  }

  if (isValid) {
    // Hide form, show success message
    form.style.display = "none";
    successMessage.style.display = "block";
    successMessage.focus();

    // Announce to screen readers
    srAnnouncement.textContent =
      "Registration submitted successfully! We will contact you within 2 business days.";

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  } else {
    // Focus first error
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

    // Announce errors to screen readers
    const errorCount = document.querySelectorAll(
      ".error-message:not(:empty)",
    ).length;
    srAnnouncement.textContent = `Form has ${errorCount} error${
      errorCount > 1 ? "s" : ""
    }. Please correct the errors and try again.`;
  }
});

// Real-time validation on blur
const fullNameInput = document.getElementById("full-name");
fullNameInput.addEventListener("blur", () => {
  if (fullNameInput.value.trim() !== "") {
    const nameError = document.getElementById("full-name-error");
    nameError.textContent = "";
    fullNameInput.classList.remove("error");
    fullNameInput.removeAttribute("aria-invalid");
  }
});

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

const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("blur", () => {
  const phoneError = document.getElementById("phone-error");
  if (phoneInput.value.trim() !== "" && !validatePhone(phoneInput.value)) {
    phoneError.textContent = "Please enter a valid UK phone number";
    phoneInput.classList.add("error");
    phoneInput.setAttribute("aria-invalid", "true");
  } else if (validatePhone(phoneInput.value)) {
    phoneError.textContent = "";
    phoneInput.classList.remove("error");
    phoneInput.removeAttribute("aria-invalid");
  }
});
