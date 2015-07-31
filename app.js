//create random index based on number of names in group
function rand(arr){return Math.floor(Math.random()*arr.length)};
//takes a array of names,changes text color at index
function turnColor(item, index, color){$(item[index]).css("color", "green")};

// takes array of groups
function pickSpeaker(arr, color){
  // iterate over groups
  for (var i = 0; i < arr.length; i++) {
    names = arr[i].children
    index = rand(names);
    turnColor(names, index, color);
  };
};


$(document).ready(function (){
  var card = $(".card");

  $("#btn-go").on("click", function(e) {
    e.preventDefault();

    var groupSize = parseInt($("#groupSize").val());
    var chunks = _.chunk(_.shuffle(studentArray),groupSize);
    var pairCard = $("#pair-container").children();
    $(pairCard).remove();

    for (var i = 0; i < chunks.length; i++) {
      var newCard = pairCard.clone();
      var newId = "row"+i;
      newCard[0].id = newId;

      $("#pair-container").append(newCard);
      var spot = $("#"+newId).find("p").html("");

      chunks[i].forEach(function(name) {
        spot.append("<span> "+name+" </span>");
      });
      card.show();
    }
    // var par = $("p");
    // pickSpeaker(par, "#090");
  });

  $("#btn-pick").on("click", function(e) {
    e.preventDefault();

    var par = $("p");
    pickSpeaker(par, "#090");
  });


  // console.log(pairCard);
  // console.log(pairCard.clone());
  // console.log(chunks);

});


