function writeNum(num) {
  if (num == 0 && document.querySelector("#input").innerHTML.length === 0) {
  } else {
    if (
      document.querySelector("#input").innerHTML == "+" ||
      document.querySelector("#input").innerHTML == "-" ||
      document.querySelector("#input").innerHTML == "×" ||
      document.querySelector("#input").innerHTML == "÷"
    ) {
      document
        .querySelector("#input")
        .setAttribute("lastMark", document.querySelector("#input").innerHTML);
      document.querySelector("#input").innerHTML = "";
    }
    document.querySelector("#input").innerHTML += num;
  }
}

function del() {
  let num = document.querySelector("#input").innerHTML;
  document.querySelector("#input").innerHTML = num.slice(0, -1);
}

function ac() {
  document.querySelector("#input").innerHTML = "";
  document.querySelector("#input").setAttribute("lastName", "");
  document.querySelector("#input").setAttribute("lastMark", "");
}

function add() {
  if (document.querySelector("#input").innerHTML.length === 0) {
  } else if (
    document.querySelector("#input").innerHTML == "+" ||
    document.querySelector("#input").innerHTML == "-" ||
    document.querySelector("#input").innerHTML == "×" ||
    document.querySelector("#input").innerHTML == "÷"
  ) {
    document.querySelector("#input").innerHTML = "+";
  } else {
    document
      .querySelector("#input")
      .setAttribute("lastInput", document.querySelector("#input").innerHTML);
    document.querySelector("#input").innerHTML = "+";
  }
}

function min() {
  if (document.querySelector("#input").innerHTML.length === 0) {
  } else if (
    document.querySelector("#input").innerHTML == "+" ||
    document.querySelector("#input").innerHTML == "-" ||
    document.querySelector("#input").innerHTML == "×" ||
    document.querySelector("#input").innerHTML == "÷"
  ) {
    document.querySelector("#input").innerHTML = "-";
  } else {
    document
      .querySelector("#input")
      .setAttribute("lastInput", document.querySelector("#input").innerHTML);
    document.querySelector("#input").innerHTML = "-";
  }
}

function multiple() {
  if (document.querySelector("#input").innerHTML.length === 0) {
  } else if (
    document.querySelector("#input").innerHTML == "+" ||
    document.querySelector("#input").innerHTML == "-" ||
    document.querySelector("#input").innerHTML == "×" ||
    document.querySelector("#input").innerHTML == "÷"
  ) {
    document.querySelector("#input").innerHTML = "×";
  } else {
    document
      .querySelector("#input")
      .setAttribute("lastInput", document.querySelector("#input").innerHTML);
    document.querySelector("#input").innerHTML = "×";
  }
}

function dividing() {
  if (document.querySelector("#input").innerHTML.length === 0) {
  } else if (
    document.querySelector("#input").innerHTML == "+" ||
    document.querySelector("#input").innerHTML == "-" ||
    document.querySelector("#input").innerHTML == "×" ||
    document.querySelector("#input").innerHTML == "÷"
  ) {
    document.querySelector("#input").innerHTML = "÷";
  } else {
    document
      .querySelector("#input")
      .setAttribute("lastInput", document.querySelector("#input").innerHTML);
    document.querySelector("#input").innerHTML = "÷";
  }
}

function equal() {
  if (document.querySelector("#input").getAttribute("lastMark") === "+") {
    document.querySelector("#input").innerHTML =
      parseFloat(document.querySelector("#input").getAttribute("lastInput")) +
      parseFloat(document.querySelector("#input").innerHTML);
  } else if (
    document.querySelector("#input").getAttribute("lastMark") === "-"
  ) {
    document.querySelector("#input").innerHTML =
      parseFloat(document.querySelector("#input").getAttribute("lastInput")) -
      parseFloat(document.querySelector("#input").innerHTML);
  } else if (
    document.querySelector("#input").getAttribute("lastMark") === "×"
  ) {
    document.querySelector("#input").innerHTML =
      parseFloat(document.querySelector("#input").getAttribute("lastInput")) *
      parseFloat(document.querySelector("#input").innerHTML);
  } else if (
    document.querySelector("#input").getAttribute("lastMark") === "÷"
  ) {
    document.querySelector("#input").innerHTML =
      parseFloat(document.querySelector("#input").getAttribute("lastInput")) /
      parseFloat(document.querySelector("#input").innerHTML);
  } else {
  }
}
