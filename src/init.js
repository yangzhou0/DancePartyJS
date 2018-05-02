
$(document).ready(function() {
  window.dancers = [];

  $('#lineUp').on('click',function(event){
    let height = $("body").height()*0.7;

    var leftInc = $("body").width()*0.8/(window.dancers.length + 2);

    let left = leftInc;
    window.dancers.forEach(function(dancer){
      dancer.$node.stop(true);
      clearTimeout(dancer.$node.data('timeout'));
      dancer.setPosition(height,left);
      dancer.$node.toggle(true);
      dancer.reSize();
      left += leftInc;
    });
  });

  $('#randomize').on('click',function(event){

    window.dancers.forEach(function(dancer){
      let height = $("body").height() *0.8* Math.random();
      var left = $("body").width() * 0.8 * Math.random();
      dancer.setPosition(height,left);
      dancer.step();
    });
  });



  // $('body').on('mouseenter','.dancer', function(event){
  //   $(this).css({'border-radius': '10%'});
  // });
  //
  // $('body').on('mouseleave','.dancer', function(event){
  //   $(this).css({'border-radius': '100%'});
  // });


  $('body').on('click','.dancer', function(event){

    var distance = function(dancer1, dancer2){
      return Math.sqrt(Math.pow((dancer1.left - dancer2.left), 2) + Math.pow((dancer1.top - dancer2.top), 2));
    }

    let dancers = window.dancers;
    let thisDancer = $(this).data('instance');

    let sortedDancers = _.sortBy(dancers,function(dancer){
      console.log(distance(thisDancer,dancer));
      return distance(thisDancer,dancer);
    });
    let dancersToChange = sortedDancers.slice(1,3);
    let left = thisDancer.left+120;
    let leftInc = 120;
    dancersToChange.forEach(function(dancer){
      dancer.setPosition(thisDancer.top,left);
      dancer.$node.toggle(true);
      dancer.reSize();
      left += leftInc;
    });

  });

  $('#moneyRain').on('click',function(){
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    for(let i = 0; i < 20; i ++ ){
      var $dollar = $('<span class="dollars"><img src="assets/GIFs/dollar.gif"></img></span>');
      $('body').append($dollar);
      var left = $("body").width() * 0.8 * Math.random();
      $dollar.css({'top':0, 'left': left});
      var time = getRandomArbitrary(1000,8000);
      $dollar.animate({'top': '100%'}, time);
    }
    setTimeout(function(){
      $('body').find('.dollars').remove();
    }, 9000);
    // let dollars = $('body').find('#moneyRain');
    // console.log(dollars);
    // dollars.forEach(function(dollar){
    //   dollar.remove();
    // })
  })






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
      $("body").height()* 0.8 * Math.random(),
      $("body").width() * 0.8 * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });



});
