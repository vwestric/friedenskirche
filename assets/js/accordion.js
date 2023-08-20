document.addEventListener("DOMContentLoaded", function() {
    var acc = document.querySelectorAll(".accordion-button");
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content) {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
      });
    }
  });
  