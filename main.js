$(document).ready(function () {

  $(".click").mouseenter(function () {
      $(".nav").toggleClass("show");
      $(".click").hide();
  });
    
    $(".nav").mouseleave(function () {
        $(".nav").toggleClass("show");
        $(".click").show();
    })
});
