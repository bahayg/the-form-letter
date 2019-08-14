$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);


    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);


$(".firstName").show();
    // $("#postcard").show();

    event.preventDefault();
  });
});
