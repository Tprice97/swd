document.addEventListener("DOMContentLoaded", (event) => {
  const navigation = document.getElementById("cs-navigation");
  const hero = document.getElementById("hero-1349");
  let lastScrollTop = 0; // Keep track of the last scroll position

  window.addEventListener(
    "scroll",
    () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if we have scrolled past the hero section
      if (currentScroll >= hero.offsetTop) {
        navigation.classList.remove("hidden");
      } else {
        // Hide the navigation on down scroll
        if (currentScroll > lastScrollTop) {
          navigation.classList.add("hidden");
        } else {
          // Show the navigation on up scroll
          navigation.classList.remove("hidden");
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    },
    false
  );
});
