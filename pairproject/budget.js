// variable to keep track of running total of prices
var current_total = 0;
var savedAmt = 50 - current_total;

if(current_total > 50){
  $(checkBtn).css("display", "none");
}

// when one section button is clicked, all of them disappear
$(".sectionBtn").click(function() {
  // hide all buttons
  $("#fp").hide();
  $("#dg").hide();
  $("#rg").hide();
  $("#fg").hide();

});

// checkout button
// when clicked, all elements are hidden
// the receipt with list of items bought, amount saved, and number of points earned is displayed
$("#checkBtn").click(function() {
  // hide all buttons + elements
  $("#fp").hide();
  $("#dg").hide();
  $("#rg").hide();
  $("#fg").hide();
  $("#cartList").hide();
  $("ul").hide();
  $("#listName").hide();
  $("#runningTotal").hide();
  $("#produce").css("display", "none");
  $("#dgoods").css("display", "none");
  $("#fgoods").css("display", "none");
  $("#rgoods").css("display", "none");
  $("#backBtn").css("display", "none");
  $("#checkBtn").css("display", "none");
  $(".row2").css("grid-template-columns", "repeat(3, 33.33%)");
  $(".col").css("display", "none");
  $(".empty").css("display", "block");
  $("#receipt").css("display", "block");
  $("#recTitle").css("display", "block");
  $("#lines").css("display", "block");
  $(".finalItems").css("display", "block");
  $(".finalAmount").css("display", "block");
  $(".again").css("display", "block");
  $("#playAgain").css("display", "flex");
  $("#lastTotal").html("Total: $" + current_total + ".00");
  $("#savedTotal").html("Total: $" + savedAmt + ".00");

});

// when fresh produce button/section is clicked, display zoomed in section with items
$("#fp").click(function() {
  $(".row2").css("grid-template-columns", "100%");
  $(".col").css("display", "none");
  $(".empty").css("display", "block");
  $("#produce").css("background-color", "#9E8773");
  $(".fpRow").css("display", "block");
  $("#backBtn").css("display", "block");

});

$("#dg").click(function() {
  $(".row2").css("grid-template-columns", "100%");
  $(".col").css("display", "none");
  $(".empty").css("display", "block");
  $("#dgoods").css("background-color", "#9E8773");
  $(".dgRow").css("display", "block");
  $("#backBtn").css("display", "block");
});

$("#rg").click(function() {
  $(".row2").css("grid-template-columns", "100%");
  $(".col").css("display", "none");
  $(".empty").css("display", "block");
  $("#rgoods").css("background-color", "#9E8773");
  $(".rgRow").css("display", "block");
  $("#backBtn").css("display", "block");
});

$("#fg").click(function() {
  $(".row2").css("grid-template-columns", "100%");
  $(".col").css("display", "none");
  $(".empty").css("display", "block");
  $("#fgoods").css("background-color", "#9E8773");
  $(".fgRow").css("display", "block");
  $("#backBtn").css("display", "block");
});

// back button will redisplay original sections and hide zoomed in sections
$("#backBtn").click(function() {
  $(".row2").css("grid-template-columns", "repeat(4, 1fr)");
  $("#fp").show();
  $("#dg").show();
  $("#rg").show();
  $("#fg").show();
  $(".col").css("display", "block");
  $(".empty").css("display", "none");
  $("#produce").css("background-color", "transparent");
  $("#dgoods").css("background-color", "transparent");
  $("#rgoods").css("background-color", "transparent");
  $("#fgoods").css("background-color", "transparent");
  $(".fpRow").css("display", "none");
  $(".dgRow").css("display", "none");
  $(".rgRow").css("display", "none");
  $(".fgRow").css("display", "none");
  $("#backBtn").css("display", "none");
});

// turns color of product to gray to note that it has been already added
function turnGray(id){
  $(id).css("filter", "grayscale(100%)");
}

// color of product remains same
function remainSameColor(id){
  $(id).css("filter", "none");
}

// string array to hold id name
var fpArray = ["it1", "it2", "it3", "it4", "it5", "it6", "it7", "it8", "it9", "it10"];
// array to keep individual count of how many times each item has been clicked
var countArray = [0,0,0,0,0,0,0,0,0,0]

//number of points variable to count the number of points for a user
var numOfPoints = 0;

// when button with class id "fresh" is clicked
$(".fresh").click(function() {

  // if current id is equivalent to the id in the array
  if(this.id === fpArray[0]){
    countArray[0] = countArray[0] + 1; // increment count for specific item clicks
    if(countArray[0]%2 === 1){  // if number of clicks is odd, it means item is added
      turnGray("#it1");
      $("ul").append("<li id='fp1'>" + "Apple $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it1");
      $("#fp1").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract ten points from item
    }
  }
  else if(this.id === fpArray[1]){
    countArray[1] = countArray[1] + 1;
    if(countArray[1]%2 === 1){
      turnGray("#it2");
      $("ul").append("<li id='fp2'>" + "Banana $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item

    }
    else{
      remainSameColor("#it2");
      $("#fp2").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[2]){
    countArray[2] = countArray[2] + 1;
    if(countArray[2]%2 === 1){
      turnGray("#it3");
      $("ul").append("<li id='fp3'>" + "Orange $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it3");
      $("#fp3").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[3]){
    countArray[3] = countArray[3] + 1;
    if(countArray[3]%2 === 1){
      turnGray("#it4");
      $("ul").append("<li id='fp4'>" + "Mango $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it4");
      $("#fp4").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[4]){
    countArray[4] = countArray[4] + 1;
    if(countArray[4]%2 === 1){
      turnGray("#it5");
      $("ul").append("<li id='fp5'>" + "Strawberries $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it5");
      $("#fp5").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[5]){
    countArray[5] = countArray[5] + 1;
    if(countArray[5]%2 === 1){
      turnGray("#it6");
      $("ul").append("<li id='fp6'>" + "Corn $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it6");
      $("#fp6").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[6]){
    countArray[6] = countArray[6] + 1;
    if(countArray[6]%2 === 1){
      turnGray("#it7");
      $("ul").append("<li id='fp7'>" + "Potatoes $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it7");
      $("#fp7").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[7]){
    countArray[7] = countArray[7] + 1;
    if(countArray[7]%2 === 1){
      turnGray("#it8");
      $("ul").append("<li id='fp8'>" + "Spinach $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it8");
      $("#fp8").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[8]){
    countArray[8] = countArray[8] + 1;
    if(countArray[8]%2 === 1){
      turnGray("#it9");
      $("ul").append("<li id='fp9'>" + "Broccoli $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it9");
      $("#fp9").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }
  else if(this.id === fpArray[9]){
    countArray[9] = countArray[9] + 1;
    if(countArray[9]%2 === 1){
      turnGray("#it10");
      $("ul").append("<li id='fp10'>" + "Carrot $2.00" + "</li>");
      current_total = current_total + 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 10; //add set points for item
    }
    else{
      remainSameColor("#it10");
      $("#fp10").remove();
      current_total = current_total - 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 10; //subtract set points for item
    }
  }

  if(current_total < 51){
    $(checkBtn).css("display", "block");
    $("#runningTotal").css("color", "green");
  }
  else{
    $(checkBtn).css("display", "none");
    $("#runningTotal").css("color", "red");
    $("#runningTotal").append(" " + "OVER THE BUDGET, PLEASE REMOVE SOME ITEMS!");
  }

});

// string array to hold id name
var dgArray = ["dg1", "dg2", "dg3", "dg4", "dg5", "dg6", "dg7", "dg8", "dg9", "dg10"];
// array to keep individual count of how many times each item has been clicked
var cntArray = [0,0,0,0,0,0,0,0,0,0]

// when button with class id "fresh" is clicked
$(".dry").click(function() {

  // if current id is equivalent to the id in the array
  if(this.id === dgArray[0]){
    cntArray[0] = cntArray[0] + 1; // increment count for specific item clicks
    if(cntArray[0]%2 === 1){  // if number of clicks is odd, it means item is added
      turnGray("#dg1");
      $("ul").append("<li id='dryg1'>" + "Rice $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg1");
      $("#dryg1").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[1]){
    cntArray[1] = cntArray[1] + 1;
    if(cntArray[1]%2 === 1){
      turnGray("#dg2");
      $("ul").append("<li id='dryg2'>" + "Pasta $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg2");
      $("#dryg2").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[2]){
    cntArray[2] = cntArray[2] + 1;
    if(cntArray[2]%2 === 1){
      turnGray("#dg3");
      $("ul").append("<li id='dryg3'>" + "Tomato Sauce $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg3");
      $("#dryg3").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[3]){
    cntArray[3] = cntArray[3] + 1;
    if(cntArray[3]%2 === 1){
      turnGray("#dg4");
      $("ul").append("<li id='dryg4'>" + "Peanut Butter $2.00" + "</li>");
      current_total = current_total + 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg4");
      $("#dryg4").remove();
      current_total = current_total - 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[4]){
    cntArray[4] = cntArray[4] + 1;
    if(cntArray[4]%2 === 1){
      turnGray("#dg5");
      $("ul").append("<li id='dryg5'>" + "Whole Wheat Bread $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg5");
      $("#dryg5").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[5]){
    cntArray[5] = cntArray[5] + 1;
    if(cntArray[5]%2 === 1){
      turnGray("#dg6");
      $("ul").append("<li id='dryg6'>" + "Coffee Beans $9.00" + "</li>");
      current_total = current_total + 9;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg6");
      $("#dryg6").remove();
      current_total = current_total - 9;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[6]){
    cntArray[6] = cntArray[6] + 1;
    if(cntArray[6]%2 === 1){
      turnGray("#dg7");
      $("ul").append("<li id='dryg7'>" + "Cereal $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg7");
      $("#dryg7").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[7]){
    cntArray[7] = cntArray[7] + 1;
    if(cntArray[7]%2 === 1){
      turnGray("#dg8");
      $("ul").append("<li id='dryg8'>" + "Flour $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg8");
      $("#dryg8").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[8]){
    cntArray[8] = cntArray[8] + 1;
    if(cntArray[8]%2 === 1){
      turnGray("#dg9");
      $("ul").append("<li id='dryg9'>" + "Canned Tuna $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg9");
      $("#dryg9").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }
  else if(this.id === dgArray[9]){
    cntArray[9] = cntArray[9] + 1;
    if(cntArray[9]%2 === 1){
      turnGray("#dg10");
      $("ul").append("<li id='dryg10'>" + "Canned Kidney Beans $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 4; //add set points for item
    }
    else{
      remainSameColor("#dg10");
      $("#dryg10").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 4; //subtract set points for item
    }
  }

  if(current_total < 51){
    $(checkBtn).css("display", "block");
    $("#runningTotal").css("color", "green");
  }
  else{
    $(checkBtn).css("display", "none");
    $("#runningTotal").css("color", "red");
    $("#runningTotal").append(" " + "OVER THE BUDGET, PLEASE REMOVE SOME ITEMS!");
  }

});

// string array to hold id name
var rgArray = ["rg1", "rg2", "rg3", "rg4", "rg5", "rg6", "rg7", "rg8", "rg9", "rg10"];
// array to keep individual count of how many times each item has been clicked
var cntArr = [0,0,0,0,0,0,0,0,0,0]

// when button with class id "fresh" is clicked
$(".ref").click(function() {

  // if current id is equivalent to the id in the array
  if(this.id === rgArray[0]){
    cntArr[0] = cntArr[0] + 1; // increment count for specific item clicks
    if(cntArr[0]%2 === 1){  // if number of clicks is odd, it means item is added
      turnGray("#rg1");
      $("ul").append("<li id='ref1'>" + "Eggs $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg1");
      $("#ref1").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[1]){
    cntArr[1] = cntArr[1] + 1;
    if(cntArr[1]%2 === 1){
      turnGray("#rg2");
      $("ul").append("<li id='ref2'>" + "Bluberry Yogurt $6.00" + "</li>");
      current_total = current_total + 6;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg2");
      $("#ref2").remove();
      current_total = current_total - 6;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[2]){
    cntArr[2] = cntArr[2] + 1;
    if(cntArr[2]%2 === 1){
      turnGray("#rg3");
      $("ul").append("<li id='ref3'>" + "Cheese $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg3");  
      $("#ref3").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[3]){
    cntArr[3] = cntArr[3] + 1;
    if(cntArr[3]%2 === 1){
      turnGray("#rg4");
      $("ul").append("<li id='ref4'>" + "Milk $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for items
    }
    else{
      remainSameColor("#rg4");
      $("#ref4").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[4]){
    cntArr[4] = cntArr[4] + 1;
    if(cntArr[4]%2 === 1){
      turnGray("#rg5");
      $("ul").append("<li id='ref5'>" + "Orange Juice $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg5");
      $("#ref5").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[5]){
    cntArr[5] = cntArr[5] + 1;
    if(cntArr[5]%2 === 1){
      turnGray("#rg6");
      $("ul").append("<li id='ref6'>" + "Water $1.00" + "</li>");
      current_total = current_total + 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg6");
      $("#ref6").remove();
      current_total = current_total - 1;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[6]){
    cntArr[6] = cntArr[6] + 1;
    if(cntArr[6]%2 === 1){
      turnGray("#rg7");
      $("ul").append("<li id='ref7'>" + "Tofu $2.00" + "</li>");
      current_total = current_total + 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg7");
      $("#ref7").remove();
      current_total = current_total - 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[7]){
    cntArr[7] = cntArr[7] + 1;
    if(cntArr[7]%2 === 1){
      turnGray("#rg8");
      $("ul").append("<li id='ref8'>" + "Salmon $7.00" + "</li>");
      current_total = current_total + 7;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg8");
      $("#ref8").remove();
      current_total = current_total - 7;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[8]){
    cntArr[8] = cntArr[8] + 1;
    if(cntArr[8]%2 === 1){
      turnGray("#rg9");
      $("ul").append("<li id='ref9'>" + "Sausages $5.00" + "</li>");
      current_total = current_total + 5;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg9");
      $("#ref9").remove();
      current_total = current_total - 5;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }
  else if(this.id === rgArray[9]){
    cntArr[9] = cntArr[9] + 1;
    if(cntArr[9]%2 === 1){
      turnGray("#rg10");
      $("ul").append("<li id='ref10'>" + "Chicken Drumstick $6.00" + "</li>");
      current_total = current_total + 6;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 6; //add set points for item
    }
    else{
      remainSameColor("#rg10");
      $("#ref10").remove();
      current_total = current_total - 6;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 6; //subtract set points for item
    }
  }

  if(current_total < 51){
    $(checkBtn).css("display", "block");
    $("#runningTotal").css("color", "green");
  }
  else{
    $(checkBtn).css("display", "none");
    $("#runningTotal").css("color", "red");
    $("#runningTotal").append(" " + "OVER THE BUDGET, PLEASE REMOVE SOME ITEMS!");
  }

});

// string array to hold id name
var fgArray = ["fg1", "fg2", "fg3", "fg4", "fg5", "fg6", "fg7", "fg8", "fg9", "fg10"];
// array to keep individual count of how many times each item has been clicked
var countArr = [0,0,0,0,0,0,0,0,0,0]

// when button with class id "fresh" is clicked
$(".frozen").click(function() {

  // if current id is equivalent to the id in the array
  if(this.id === fgArray[0]){
    countArr[0] = countArr[0] + 1; // increment count for specific item clicks
    if(countArr[0]%2 === 1){  // if number of clicks is odd, it means item is added
      turnGray("#fg1");
      $("ul").append("<li id='fr1'>" + "Waffles $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg1");
      $("#fr1").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[1]){
    countArr[1] = countArr[1] + 1;
    if(countArr[1]%2 === 1){
      turnGray("#fg2");
      $("ul").append("<li id='fr2'>" + "Vegetable Pizza $8.00" + "</li>");
      current_total = current_total + 8;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg2");
      $("#fr2").remove();
      current_total = current_total - 8;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[2]){
    countArr[2] = countArr[2] + 1;
    if(countArr[2]%2 === 1){
      turnGray("#fg3");
      $("ul").append("<li id='fr3'>" + "Frozen Chicken Legs $8.00" + "</li>");
      current_total = current_total + 8;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg3");
      $("#fr3").remove();
      current_total = current_total - 8;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[3]){
    countArr[3] = countArr[3] + 1;
    if(countArr[3]%2 === 1){
      turnGray("#fg4");
      $("ul").append("<li id='fr4'>" + "Cotton Candy Ice Cream $5.00" + "</li>");
      current_total = current_total + 5;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg4");
      $("#fr4").remove();
      current_total = current_total - 5;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[4]){
    countArr[4] = countArr[4] + 1;
    if(countArr[4]%2 === 1){
      turnGray("#fg5");
      $("ul").append("<li id='fr5'>" + "Popsicles $3.00" + "</li>");
      current_total = current_total + 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg5");
      $("#fr5").remove();
      current_total = current_total - 3;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[5]){
    countArr[5] = countArr[5] + 1;
    if(countArr[5]%2 === 1){
      turnGray("#fg6");
      $("ul").append("<li id='fr6'>" + "Bag of Mixed Vegetables $2.00" + "</li>");
      current_total = current_total + 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg6");
      $("#fr6").remove();
      current_total = current_total - 2;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[6]){
    countArr[6] = countArr[6] + 1;
    if(countArr[6]%2 === 1){
      turnGray("#fg7");
      $("ul").append("<li id='fr7'>" + "Bag of Mixed Fruits $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg7");
      $("#fr7").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[7]){
    countArr[7] = countArr[7] + 1;
    if(countArr[7]%2 === 1){
      turnGray("#fg8");
      $("ul").append("<li id='fr8'>" + "Bag of Mixed Seafood $11.00" + "</li>");
      current_total = current_total + 11;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg8");
      $("#fr8").remove();
      current_total = current_total - 11;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[8]){
    countArr[8] = countArr[8] + 1;
    if(countArr[8]%2 === 1){
      turnGray("#fg9");
      $("ul").append("<li id='fr9'>" + "Pack of Frozen Burritos $7.00" + "</li>");
      current_total = current_total + 7;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg9");
      $("#fr9").remove();
      current_total = current_total - 7;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }
  else if(this.id === fgArray[9]){
    countArr[9] = countArr[9] + 1;
    if(countArr[9]%2 === 1){
      turnGray("#fg10");
      $("ul").append("<li id='fr10'>" + "Frozen French Fries $4.00" + "</li>");
      current_total = current_total + 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints + 8; //add set points for item
    }
    else{
      remainSameColor("#fg10");
      $("#fr10").remove();
      current_total = current_total - 4;
      $("#runningTotal").html("Total: $" + current_total + ".00");
      numOfPoints = numOfPoints - 8; //subtract set points for item
    }
  }

  if(current_total < 51){
    $(checkBtn).css("display", "block");
    $("#runningTotal").css("color", "green");
  }
  else{
    $(checkBtn).css("display", "none");
    $("#runningTotal").css("color", "red");
    $("#runningTotal").append(" " + "OVER THE BUDGET, PLEASE REMOVE SOME ITEMS!");
  }

});
