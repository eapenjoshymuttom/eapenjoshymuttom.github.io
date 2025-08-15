document.addEventListener("DOMContentLoaded", () => {
  const headerContent = document.querySelector(".header-content") || document.querySelector("header");
  const nav = (headerContent && headerContent.querySelector("nav")) || document.querySelector("header nav");

  if (!nav || !headerContent) return;

  let hamburger = headerContent.querySelector(".hamburger");
  if (!hamburger) {
    hamburger = document.createElement("button");
    hamburger.className = "hamburger";
    hamburger.type = "button";
    hamburger.textContent = "☰";
    headerContent.insertBefore(hamburger, headerContent.firstChild);
  }

  function closeMenu() {
    nav.classList.remove("active");
    document.body.classList.remove("no-scroll");
    hamburger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  hamburger.setAttribute("aria-label", "Toggle menu");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking a nav link
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => closeMenu())
  );

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});