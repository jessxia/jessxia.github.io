$(document).ready(function () {
  $(window).on("load", function () {
    $(".loading").delay(800).fadeOut();
  });

  $("#past").hide();
  $("#current").hide();
  $(document).on("click", "#complete", function () {
    this.style.color = "white";
    $("#progress").css("color", "#424b54");
    $("#past").show();
    $("#current").hide();
  });
  $(document).on("click", "#progress", function () {
    this.style.color = "white";
    $("#complete").css("color", "#424b54");
    $("#current").show();
    $("#past").hide();
  });
});
