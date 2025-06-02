let main = document.getElementById("main");
main.style.margin = "0";
main.style.padding = "0";

let root = document.getElementById("root");
root.style.height = "100vh";
root.style.width = "100%";
root.style.background = "linear-gradient(45deg, #d20019, #7462ff, #23a6d5, #f48e21, #23d5ab, #ffe53b)";
root.style.backgroundSize = "300% 300%";
root.style.animation = "color 12s ease-in-out infinite";

// Add keyframes with JS
let style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `
@keyframes color {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;
document.head.appendChild(style);
