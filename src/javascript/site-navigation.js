const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-navigation");

if (navToggle && navigation) {
  const closeNavigation = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      navigation.removeAttribute("data-open");
    } else {
      navigation.setAttribute("data-open", "true");
    }
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1051px)").matches) {
      closeNavigation();
    }
  });
}
