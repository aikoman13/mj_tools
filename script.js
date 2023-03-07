var selectedButtons = [];

function copyValue(button) {
  var buttonValue = button.innerHTML;
  var inputField = document.getElementById('myInput');
  var promptValue = document.getElementById('myPrompt').value;
  var prefix = "/imagine prompt: " + promptValue;
  var suffix = ": --v 4";
  var separator = ", ";
  if (selectedButtons.includes(buttonValue)) {
    // Remove the button value from the selectedButtons array
    selectedButtons = selectedButtons.filter(function(value, index, arr) {
      return value != buttonValue;
    });
    button.classList.remove("selected"); // remove the "selected" class
  } else {
    // Add the button value to the selectedButtons array
    selectedButtons.push(buttonValue);
    button.classList.add("selected"); // add the "selected" class
  }
  // Update the input field based on the selected buttons
  var inputValue = prefix;
  if (selectedButtons.length > 0) {
    inputValue += separator + selectedButtons.join(separator);
  }
  inputValue += suffix;
  inputField.value = inputValue;
}
