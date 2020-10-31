"use strict";

$(document).ready(function () {
  $("#usr").keyup(function (event) {
    if (event.which === 13) {
      $("#success").click();
    }
  });
  $("#success").click(function () {
    let x = document.getElementById("usr").value;
    let output = document.getElementById("output");
    if (x == null || x == "") {
      output.innerHTML = "*please fill the field";
      return false;
    } else {
      output.innerHTML = "";
      $("#ull").prepend(
        "<li class='makealert'><div class='alert alert-success alert-dismissible  show'><div class='form-check'><input style='font-size:10px;' type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" +
          x +
          "</label></div><button type='button' class='close' data-dismiss='alert'>&times;</button> </div> </li>"
      );
    }
  });
});
