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
    
    if ((side1 === side2) && (side2 === side3)) {
    $("#equilateral").show();
    } else if ((side1 + side2) <= (side3)) {
    $("#not-triangle").show();
    } else if ((side1 + side3) <= (side2)) {
    $("#not-triangle").show();
    } else if ((side2 + side3) <= (side1)) {
    $("#not-triangle").show();
    } else if ((side1 === side2) && (side1 !== side3)) {
    $("#isosceles").show();
    } else if ((side2 === side3) && (side2 !== side1)) { 
    $("#isosceles").show();
    } else if ((side3 === side1) && (side3 !== side2)) { 
    $("#isosceles").show();
    } else if ((side1 !== side2 || side3) && (side2 !== side3)) {
    $("#scalene").show();
    } 
  });
});
