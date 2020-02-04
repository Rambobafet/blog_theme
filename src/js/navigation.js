const toggleNav = document.getElementById("toggleNavigation");
const panelNav = document.getElementById("mainNavigationPanel");

function stringToBoolean(value) {
  return value === "true";
}

toggleNav.addEventListener("click", e => {
  console.log("e", e);

  const expanded = stringToBoolean(toggleNav.getAttribute("aria-expanded"));

  toggleNav.setAttribute("aria-expanded", (!expanded).toString());
  panelNav.setAttribute("aria-hidden", (!expanded).toString());

  expanded
    ? panelNav.classList.remove("is-open")
    : panelNav.classList.add("is-open");
});
