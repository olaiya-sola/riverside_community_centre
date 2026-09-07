      let currentFontSize = 16;
      const minFontSize = 12;
      const maxFontSize = 24;

      const fontIncrease = document.getElementById("font-increase");
      const fontDecrease = document.getElementById("font-decrease");
      const fontReset = document.getElementById("font-reset");
      const srAnnouncement = document.getElementById("sr-announcement");

      function updateFontSize() {
        document.documentElement.style.fontSize = currentFontSize + "px";
        localStorage.setItem("fontSize", currentFontSize);
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

      const savedFontSize = localStorage.getItem("fontSize");
      if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSize + "px";
      }

      const themeToggle = document.getElementById("theme-toggle");
      const body = document.body;

      function toggleTheme() {
        const isHighContrast = body.classList.toggle("high-contrast");
        themeToggle.setAttribute("aria-pressed", isHighContrast);
        localStorage.setItem(
          "theme",
          isHighContrast ? "high-contrast" : "normal",
        );
        srAnnouncement.textContent = isHighContrast
          ? "High contrast mode enabled"
          : "High contrast mode disabled";
      }

      themeToggle.addEventListener("click", toggleTheme);

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "high-contrast") {
        body.classList.add("high-contrast");
        themeToggle.setAttribute("aria-pressed", "true");
      }