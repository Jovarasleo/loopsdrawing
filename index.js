let aukstis = document.querySelector("input");
aukstis.addEventListener("input", inputValue);
function inputValue(event) {
  if (Number(event.target.value) <= 25) {
    aukstis = Number(event.target.value);
  } else aukstis = null;
}
const result = document.querySelector(".result");
function triangle() {
  for (i = 0; i <= aukstis; i++) {
    result.innerHTML += "<br>";
    for (it = 0; it < i; it++) {
      result.innerHTML += "*" + "&nbsp;";
    }
  }
}
function pyramid() {
  for (i = 0; i <= aukstis; i++) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;";
    }
  }
}
function reversePyramid() {
  result.innerHTML += "<br>";
  for (i = aukstis; i >= 0; i--) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;";
    }
  }
}
function diamond() {
  for (i = 0; i <= aukstis / 2; i++) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;";
    }
  }
  if (aukstis % 2 === 1) {
    for (i = aukstis / 2; i > 0; i--) {
      result.innerHTML += "<br>";
      for (it = aukstis; it >= i; it--) {
        result.innerHTML += "&nbsp;";
      }
      for (ite = 0; ite <= it; ite++) {
        result.innerHTML += "*" + "&nbsp;";
      }
    }
  } else {
    for (i = aukstis / 2 - 1; i > 0; i--) {
      result.innerHTML += "<br>";
      for (it = aukstis; it >= i; it--) {
        result.innerHTML += "&nbsp;";
      }
      for (ite = 0; ite <= it; ite++) {
        result.innerHTML += "*" + "&nbsp;";
      }
    }
  }
}
function clear() {
  result.innerHTML = "";
}
function choose(name) {
  switch (name) {
    case "triangle":
      triangle();
      break;
    case "pyramid":
      pyramid();
      break;
    case "rpyramid":
      reversePyramid();
      break;
    case "diamond":
      diamond();
      break;
    case "clear":
      clear();
      break;
    default:
  }
}
document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    choose(event.target.name);
  }
});
