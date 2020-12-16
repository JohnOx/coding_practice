var animals, amk, randomAnimal, x;

animals = [ "Hirsch", "Eule", "Schlange", "Fuchs", "Eichhörnchen" ];

amk = $("<div></div>");


// Animal Generator
function newAnimal() {
  
  randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  
  
  // create animal element inside main
  if ( randomAnimal ) {

     // reduce animals array
    x = animals.shift();
    
    $( "#Tier" ).text( x ),

    amk.text();
    amk.addClass( "box droppable" );
    amk.attr( "id", x )
    $( ".main" ).append( amk );
  }


    // random placement of animal-divs
    $( ".box" ).each(function (index) {
      $( this ).css({
        left: Math.random() * ($( ".main" ).width() - $( this ).width()),
        top: Math.random() * ($( ".main" ).height() - $( this ).height())
        });
    
    });
  

// move item: flashlight

$( "#flashlight" ).draggable({    
    revert: true, 
    revertDuration: 600,  
});
 



// release flashlight on animal and append to list
$( ".box" ).droppable({
    accept: "#flashlight",
  
      drop: function matchesFound() { 
            $( "#match" ).append('<li>' + x + '</li>' );
          
            if( x == "Eichhörnchen" ) {
            alert( "Bravo!!! Du hast alle Tiere gefunden!" )
            location.reload( 'index.html' );
          }
      },

      over: function showHint() {
            $( this ).text( "🦋" )
      },

      out: function noHint() {
        $( this ).text( " " )
      }
  });

}




//******** Experimental Features *************


// light
// $(document).on('mousemove',function(e){
//       $('#sharpen').css({
//        left:  e.pageX,
//        top:   e.pageY
//       });
//     })


