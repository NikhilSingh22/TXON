const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    document.body.style.backgroundColor = "rgb(1,1,1)";
    document.body.style.transition = "all 1.2s ease";
  } else {
    document.body.style.backgroundColor = "#def7f5";
  }
});

let string = "";
var btn = document.querySelectorAll(".btn");
var screen = document.querySelector("#screen");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (string != "") {
        string = eval(string);
        screen.value = string;
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      screen.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      screen.value = string;
    } else if (e.target.innerHTML == "÷") {
      string = string + "/";
      screen.value = string;
    } else {
      string = string + e.target.innerHTML;
      screen.value = string;
    }
  });
});

function sin() {
  screen.value = Math.sin(screen.value);
}
function cos() {
  screen.value = Math.cos(screen.value);
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function log() {
  screen.value = Math.log10(screen.value);
}
function ln() {
  screen.value = Math.log(screen.value);
}
function power() {
  screen.value = Math.pow(screen.value, 2);
}
function root() {
  screen.value = Math.pow(screen.value, 1 / 2);
}
