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
  // Update the input field based on the selected buttons and prompt value
  var inputValue = prefix;
  if (selectedButtons.length > 0) {
    inputValue += separator + selectedButtons.join(separator);
  }
  inputValue += suffix;
  inputField.value = inputValue;
}

// Add event listener to myPrompt textarea
document.getElementById("myPrompt").addEventListener("input", function() {
  // Update myInput input field with the prompt value
  var inputField = document.getElementById('myInput');
  var promptValue = document.getElementById('myPrompt').value;
  var prefix = "/imagine prompt: " + promptValue;
  var suffix = ": --v 4";
  var separator = ", ";
  // Update the input field based on the selected buttons and prompt value
  var inputValue = prefix;
  if (selectedButtons.length > 0) {
    inputValue += separator + selectedButtons.join(separator);
  }
  inputValue += suffix;
  inputField.value = inputValue;
});

function clearTextarea() {
  document.getElementById("myInput").value = "";
  document.getElementById("myPrompt").value = "";
}
function copyToClipboard() {
  var textarea = document.getElementById("myInput");
  textarea.select();
  document.execCommand("copy");

  var message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(function() {
        message.style.display = "none";
      }, 2000);
}
updateInput()