$(document).ready(function () {
    console.log("yo");
  $(window).on("load", function () {
      console.log("hi");
    $(".loading").delay(800).fadeOut();
  });

  $("#past").hide();
  $("#current").hide();
  $(document).on("click", "#complete", function () {
    this.style.color = "#cdc6a5";
    $("#progress").css("color", "#424b54");
    $("#past").show();
    $("#current").hide();
  });
  $(document).on("click", "#progress", function () {
    this.style.color = "#cdc6a5";
    $("#complete").css("color", "#424b54");
    $("#current").show();
    $("#past").hide();
  });
});
