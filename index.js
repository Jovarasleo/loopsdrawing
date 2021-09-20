let aukstis = 15;
const result = document.querySelector(".result");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

button1.addEventListener("click", (event) => {
  for (i = 0; i <= aukstis; i++) {
    result.innerHTML += "<br>" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    for (it = 0; it < i; it++) {
      result.innerHTML += "*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
  }
});
button2.addEventListener("click", (event) => {
  for (i = 0; i <= aukstis; i++) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
  }
});
button3.addEventListener("click", (event) => {
  result.innerHTML += "<br>";
  for (i = aukstis; i >= 0; i--) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
  }
});
button4.addEventListener("click", (event) => {
  for (i = 0; i <= aukstis; i++) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
  }
  for (i = aukstis - 1; i > 0; i--) {
    result.innerHTML += "<br>";
    for (it = aukstis; it >= i; it--) {
      result.innerHTML += "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
    for (ite = 0; ite <= it; ite++) {
      result.innerHTML += "*" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
    }
  }
});
button5.addEventListener("click", (event) => {
  result.innerHTML = "";
});
