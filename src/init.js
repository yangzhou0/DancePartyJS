
$(document).ready(function() {
  window.dancers = [];

  $('#lineUp').on('click',function(event){
    let height = $("body").height()/2;

    var leftInc = $("body").width()/(window.dancers.length + 2);

    let left = leftInc;
    window.dancers.forEach(function(dancer){
      dancer.setPosition(height,left);
      left += leftInc;

    });
  });

  $('#randomize').on('click',function(event){

    window.dancers.forEach(function(dancer){
      let height = $("body").height() * Math.random();
      var left = $("body").width() * Math.random();
      dancer.setPosition(height,left);
    });
  });

  $('#interact').on('click',function(event){

  });


  // $('body').on('mouseover','.dancer', function(event){
  //   $(this).css({'border-color': 'blue'});
  // });

  //interaction function
  $('body').on('click','.dancer', function(event){

    var distance = function(dancer1, dancer2){
      console.log(`dancer1 left = ${dancer1.left}`);
      console.log(`dancer1 top = ${dancer1.top}`);
      console.log(`dancer2 left = ${dancer2.left}`);
      console.log(`dancer2 top = ${dancer2.top}`);
      return Math.sqrt(Math.pow((dancer1.left - dancer2.left), 2) + Math.pow((dancer1.top - dancer2.top), 2));
    }

    let dancers = window.dancers;
    let thisDancer = $(this);
    let sortedDancers = _.sortBy(dancers,function(dancer){
      console.log(distance(thisDancer,dancer));
      return distance(thisDancer,dancer);
      // return dancer.left;
    });
    let dancersToChange = sortedDancers.slice(0,3);
    console.log(dancersToChange);
    // console.log(_.sortBy([2,4,1,2,3],function(num){return num}));
    dancersToChange.forEach(function(dancer){
      dancer.$node.css({'border-color': 'blue'});
    })

  });






  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });



});
