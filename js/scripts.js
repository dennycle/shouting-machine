$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var someInput = $("input#text").val();
    var second = someInput.toUpperCase();

    $(".text").append(second);

    $("#sayback").show();

    event.preventDefault();
  });
});
