var selectedMidButtons = [];
var selectedBackButtons = [];

function copyValue(button) {
  var buttonValue = button.innerHTML;
  var inputField = document.getElementById('myInput');
  var promptValue = document.getElementById('myPrompt').value;
  var prefix = "/imagine prompt: " + promptValue;
  var midCode = "";
  var backCode = " ";
  var suffix = " --v 4";
  var separator = ", ";
  var separatorBack = " "
  
  if (button.getAttribute('id') == 'midCode') {
    if (selectedMidButtons.includes(buttonValue)) {
      // Remove the button value from the selectedMidButtons array
      selectedMidButtons = selectedMidButtons.filter(function(value, index, arr) {
        return value != buttonValue;
      });
      button.classList.remove("selected"); // remove the "selected" class
    } else {
      // Add the button value to the selectedMidButtons array
      selectedMidButtons.push(buttonValue);
      button.classList.add("selected"); // add the "selected" class
    }
  } else if (button.getAttribute('id') == 'backCode') {
    if (selectedBackButtons.includes(buttonValue)) {
      // Remove the button value from the selectedBackButtons array
      selectedBackButtons = selectedBackButtons.filter(function(value, index, arr) {
        return value != buttonValue;
      });
      button.classList.remove("selected"); // remove the "selected" class
    } else {
      // Add the button value to the selectedBackButtons array
      selectedBackButtons.push(buttonValue);
      button.classList.add("selected"); // add the "selected" class
    }
  }
  
  // Generate code for selected mid buttons
  if (selectedMidButtons.length > 0) {
    midCode = "" + selectedMidButtons.join(separator);
  }
  
  // Generate code for selected back buttons
  if (selectedBackButtons.length > 0) {
    backCode = " " + selectedBackButtons.join(separatorBack);
  }
  
  // Update the input field based on the selected buttons and prompt value
  var inputValue = prefix + " " + midCode + backCode + suffix;
  inputField.value = inputValue;
}

// Add event listener to myPrompt textarea
document.getElementById("myPrompt").addEventListener("input", function() {
  // Update myInput input field with the prompt value
  var inputField = document.getElementById('myInput');
  var promptValue = document.getElementById('myPrompt').value;
  var prefix = "/imagine prompt: " + promptValue;
  var midCode = "";
  var backCode = "";
  var suffix = " --v 4";
  var separator = "";
  
  // Generate code for selected mid buttons
  if (selectedMidButtons.length > 0) {
    midCode = "" + selectedMidButtons.join(separator);
  }
  
  // Generate code for selected back buttons
  if (selectedBackButtons.length > 0) {
    backCode = "" + selectedBackButtons.join(separator);
  }
  
  // Update the input field based on the selected buttons and prompt value
  var inputValue = prefix + " " + midCode + backCode + suffix;
  inputField.value = inputValue;
});

function clearTextarea() {
  document.getElementById("myInput").value = "";
  document.getElementById("myPrompt").value = "";
  
  // Clear selected buttons
  selectedMidButtons = [];
  selectedBackButtons = [];
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
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
