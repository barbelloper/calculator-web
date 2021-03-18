const num0 = document.querySelector(".js-calform__0"),
  num1 = document.querySelector(".js-calform__1"),
  num2 = document.querySelector(".js-calform__2"),
  num3 = document.querySelector(".js-calform__3"),
  num4 = document.querySelector(".js-calform__4"),
  num5 = document.querySelector(".js-calform__5"),
  num6 = document.querySelector(".js-calform__6"),
  num7 = document.querySelector(".js-calform__7"),
  num8 = document.querySelector(".js-calform__8"),
  num9 = document.querySelector(".js-calform__9"),
  plus = document.querySelector(".js-calform__plus"),
  minus = document.querySelector(".js-calform__minus"),
  mult = document.querySelector(".js-calform__mult"),
  divide = document.querySelector(".js-calform__divide"),
  reset = document.querySelector(".js-calform__reset"),
  equal = document.querySelector(".js-calform__equal"),
  result = document.querySelector("input");
let tempNum = "";
let numList = [];
let cnt = 0;
function num0Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num1Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;

  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num2Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num3Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num4Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num5Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num6Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num7Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num8Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  result.value = tempNum;
  localStorage.setItem(`num${cnt}`, tempNum);
  tempNum = "";
}
function num9Handler(event) {
  event.preventDefault();
  const selectedNum = event.target.innerText;
  numList.push(selectedNum);
  numList.forEach(function (num) {
    tempNum = tempNum + num;
  });
  localStorage.setItem(`num${cnt}`, tempNum);
  result.value = tempNum;
  tempNum = "";
}
function plusHandler(event) {
  event.preventDefault();
  const getNum = parseInt(localStorage.getItem(`num${cnt}`));
  let computation = localStorage.getItem("Computation");
  if (localStorage.getItem(`num1`) === null) {
    result.value = getNum;
  } else {
    if (computation === "PLUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) + getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MINUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) - getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MULT") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) * getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "DIVIDE") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) / getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
  }
  if (cnt === 0) {
    cnt = 1;
  } else {
    cnt = 0;
  }
  tempNum = "";
  numList = [];
  localStorage.setItem("Computation", "PLUS");
}
function multHandler(event) {
  event.preventDefault();
  const getNum = parseInt(localStorage.getItem(`num${cnt}`));
  let computation = localStorage.getItem("Computation");
  if (localStorage.getItem(`num1`) === null) {
    result.value = getNum;
  } else {
    if (computation === "PLUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) + getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MINUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) - getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MULT") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) * getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "DIVIDE") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) / getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
  }
  if (cnt === 0) {
    cnt = 1;
  } else {
    cnt = 0;
  }
  tempNum = "";
  numList = [];
  localStorage.setItem("Computation", "MULT");
}

function divideHandler(event) {
  event.preventDefault();

  const getNum = parseInt(localStorage.getItem(`num${cnt}`));
  let computation = localStorage.getItem("Computation");
  if (localStorage.getItem(`num1`) === null) {
    result.value = getNum;
  } else {
    if (computation === "PLUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) + getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MINUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) - getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MULT") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) * getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "DIVIDE") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) / getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
  }
  if (cnt === 0) {
    cnt = 1;
  } else {
    cnt = 0;
  }
  tempNum = "";
  numList = [];
  localStorage.setItem("Computation", "DIVIDE");
}

function minusHandler(event) {
  event.preventDefault();
  const getNum = parseInt(localStorage.getItem(`num${cnt}`));
  let computation = localStorage.getItem("Computation");
  if (localStorage.getItem(`num1`) === null) {
    result.value = getNum;
  } else {
    if (computation === "PLUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) + getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MINUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) - getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MULT") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) * getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "DIVIDE") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) / getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
  }
  if (cnt === 0) {
    cnt = 1;
  } else {
    cnt = 0;
  }
  tempNum = "";
  numList = [];
  localStorage.setItem("Computation", "MINUS");
}

function resetHandler(event) {
  event.preventDefault();
  numList = [];
  localStorage.clear();
  result.value = 0;
  cnt = 0;
}
function equalHandler(event) {
  event.preventDefault();
  const getNum = parseInt(localStorage.getItem(`num${cnt}`));
  let computation = localStorage.getItem("Computation");
  if (localStorage.getItem(`num1`) === null) {
    result.value = getNum;
  } else {
    if (computation === "PLUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) + getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MINUS") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) - getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "MULT") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) * getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
    if (computation === "DIVIDE") {
      result.value =
        parseInt(localStorage.getItem(`num${cnt === 0 ? `1` : `0`}`)) / getNum;
      localStorage.setItem(`num${cnt}`, result.value);
    }
  }
}
function init() {
  num0.addEventListener("click", num0Handler);
  num1.addEventListener("click", num1Handler);
  num2.addEventListener("click", num2Handler);
  num3.addEventListener("click", num3Handler);
  num4.addEventListener("click", num4Handler);
  num5.addEventListener("click", num5Handler);
  num6.addEventListener("click", num6Handler);
  num7.addEventListener("click", num7Handler);
  num8.addEventListener("click", num8Handler);
  num9.addEventListener("click", num9Handler);
  plus.addEventListener("click", plusHandler);
  minus.addEventListener("click", minusHandler);
  mult.addEventListener("click", multHandler);
  divide.addEventListener("click", divideHandler);
  reset.addEventListener("click", resetHandler);
  equal.addEventListener("click", equalHandler);
}

init();
