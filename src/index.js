//UI logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#not-triangle").hide();
    $("#invalid").hide();
  });
});