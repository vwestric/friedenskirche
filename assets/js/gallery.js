$(document).ready(function() {
    $('.horizontal-scroll').on('mousewheel DOMMouseScroll', function(e) {
      var delta = (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) ? -1 : 1;
      this.scrollLeft += (delta * 40); // Scroll value - you can adjust this value if needed
      e.preventDefault();
    });
  });