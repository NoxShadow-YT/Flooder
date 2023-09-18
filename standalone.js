javascript:
var num = prompt("Welcome to the Learning Calculator!\n\nPlease enter a number or a math expression to calculate: ");
var done = false;
var x = window.location.href;

if (num === "111222777") {
  var floodNum = prompt("How many times do you want this page to show up in your history?\n\nDeveloped By: NX Network");
  if (floodNum) {
    floodNum = parseInt(floodNum);
    if (!isNaN(floodNum)) {
      for (var i = 1; i <= floodNum; i++) {
        history.pushState(0, 0, i == floodNum ? x : i.toString());
        if (i == floodNum) {
          done = true;
        }
      }

      if (done === true) {
        alert(
          "Flooding Successful! 🌊\n\n" +
          window.location.href +
          "\n\nIs now in your history " +
          floodNum +
          (floodNum == 1 ? " time." : " times.") +
          "\n\nDeveloped By: NX Network"
        );
      } else {
        alert(
          "Flooding Failed! ⚠️\n\nPlease make sure you enter a valid number and try again.\n\nDeveloped By: NX Network"
        );
      }
    } else {
      alert("Flooding Canceled! ❌\n\nInvalid number entered.\n\nDeveloped By: NX Network");
    }
  } else {
    alert("Flooding Canceled! ❌\n\nNo valid number was entered.\n\nDeveloped By: NX Network");
  }
} else {
  var result = eval(num);
  if (!isNaN(result)) {
    alert("Result: " + result);
  } else {
    alert("Invalid input. Please enter a valid number or math expression.\n\nDeveloped By: NX Network");
  }
}
