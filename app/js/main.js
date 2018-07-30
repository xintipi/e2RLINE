$(document).ready(function () {
  $("#panel-title_01, #panel-title_02, #panel-title_03").on("click", function () {
    if ( $("#panel-title_01, #panel-title_02, #panel-title_03").hasClass("collapsed")) {
      $(".glyphicon-plus").show()
      $(".glyphicon-minus").hide()
      if ($(this).hasClass("collapsed")) {
        $(this).children(".glyphicon-plus").hide()
        $(this).children(".glyphicon-minus").show()
      }
    }
  })
})