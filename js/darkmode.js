const html = document.querySelector("html");
const btn = document.querySelector("#toggle");
if (localStorage.getItem("darkMode") === "enabled") {
  html.classList.add("dark");
}
function toggleTheme() {
  html.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    html.classList.contains("dark") ? "enabled" : "disabled"
  );
}

btn.addEventListener("click", toggleTheme);
