function n1() {
  document.case.display.value += "1"
};

function n2() {
  document.case.display.value += "2"
};

function n3() {
  document.case.display.value += "3"
};

function n4() {
  document.case.display.value += "4"
};

function n5() {
  document.case.display.value += "5"
};

function Plus() {
  document.case.display.value += "+"
};

function Minus() {
  document.case.display.value += "-"
};

function Divide() {
  document.case.display.value += "/"
};

function Multiply() {
  document.case.display.value += "*"
};

function Equals() {
  var equals = eval(document.case.display.value)
  document.case.display.value = equals;
}

function Clr() {
  document.case.display.value = ""
};
