
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"]
var charSelection = {
  lcl: '',
  ucl: '',
  num: '',
  spc: '',
  length: '',
}

$('#submit').click(function () {
  setVars();
  makePassword()
});

function setVars() {
  if ($('#UCL').is(":checked")) {
    charSelection.ucl = "True"
  }
  else {
    charSelection.ucl = "False"
  };
  if ($('#LCL').is(":checked")) {
    charSelection.lcl = "True"
  }
  else {
    charSelection.lcl = "False"
  };
  if ($('#NUM').is(":checked")) {
    charSelection.num = "True"
  }
  else {
    charSelection.num = "False"
  };
  if ($('#SPC').is(":checked")) {
    charSelection.spc = "True"
  }
  else {
    charSelection.spc = "False"
  };
  charSelection.length = $('#passSize').val()
}

function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
}

function makePassword() {
  if (charSelection.lcl == "True" && charSelection.ucl == "True" && charSelection.num == "True" && charSelection.spc == "True") {
    var ERROR = "Please leave at least one box unchecked";
    $('#errors').html(ERROR);
    $('#passwordArea').html('');
    return
  }
  if (charSelection.length > 128 || charSelection.length < 8 || charSelection.length == isNaN) {
    var ERROR = "Please ensure your password length is a number between 8 and 128";
    $('#errors').html(ERROR);
    $('#passwordArea').html('');
    return
  }
  else $('#errors').html('');
  var password = []
  var charSet = []
  if (charSelection.lcl == "False") { charSet = charSet.concat(lowerCase) }
  if (charSelection.ucl == "False") { charSet = charSet.concat(upperCase) }
  if (charSelection.num == "False") { charSet = charSet.concat(numbers) }
  if (charSelection.spc == "False") { charSet = charSet.concat(specialChars) }
  for (var i = 0; i < charSelection.length; i++) {
    var tempChar = getRandom(charSet);
    password.push(tempChar);
  }
  var final = password.join('')
  $('#passwordArea').html(final)
}