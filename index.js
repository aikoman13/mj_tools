var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // close any open sections
    var activePanels = document.querySelectorAll(".accordion.active + .panel");
    activePanels.forEach(function(panel) {
      panel.style.display = "none";
      panel.previousElementSibling.classList.remove("active");
    });
    
    // toggle the clicked section
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
