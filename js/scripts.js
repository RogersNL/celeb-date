$(document).ready(function(){

$('#yourInfo').submit(function(event){
  event.preventDefault();
  var inputName = $('input#user-name').val();
  var inputGender = $('select#gender').val();
  var inputAge = parseInt($('select#user-age').val());
  var inputDate = parseInt($('select#user-date').val());

  var result = inputAge + inputDate

  $(".inputtedName").text(inputName);

  if (inputGender === "Male") {
    if (result >=6 ) {
      $("#matchEarhart").show();
      $("#matchMonroe").hide();
      $("#matchAaliyah").hide();
      $("#matchBowie").hide();
      $("#matchPrince").hide();
      $("#matchKobain").hide();

    } else if (result >= 4) {
      $("#matchMonroe").show();
      $("#matchEarhart").hide();
      $("#matchAaliyah").hide();
      $("#matchBowie").hide();
      $("#matchPrince").hide();
      $("#matchKobain").hide();
    } else {
      $("#matchAaliyah").show();
      $("#matchMonroe").hide();
      $("#matchEarhart").hide();
      $("#matchBowie").hide();
      $("#matchPrince").hide();
      $("#matchKobain").hide();
    }
  } else {
     if (result >=6 ) {
      $("#matchBowie").show();
      $("#matchMonroe").hide();
      $("#matchAaliyah").hide();
      $("#matchEarhart").hide();
      $("#matchPrince").hide();
      $("#matchKobain").hide();
    } else if (result >= 4) {
      $("#matchPrince").show();
      $("#matchMonroe").hide();
      $("#matchAaliyah").hide();
      $("#matchBowie").hide();
      $("#matchEarhart").hide();
      $("#matchKobain").hide();
    } else {
      $("#matchKobain").show();
      $("#matchMonroe").hide();
      $("#matchAaliyah").hide();
      $("#matchBowie").hide();
      $("#matchPrince").hide();
      $("#matchEarhart").hide();
    }
  }


});



});
