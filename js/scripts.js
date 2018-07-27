
$(document).ready(function() {
  $("#kenya1").click(function() {
    var elem = $("#kenya1").text();
    if (elem == "Read More") {
      $("#kenya1").text("Read Less");
      $("#kenya").slideDown();
    } else {
      $("#kenya1").text("Read More");
      $("#kenya").slideUp();
    }
  });
});

/*
$('.more').find('.toggle').on('click', function (e) {
  e.preventDefault();
  this.expand = !this.expand;
  $(this).text(this.expand?"Read Less":"Read more");
  $(this).closest('.more').find('.toggle').toggleClass('toggle');
});
*/