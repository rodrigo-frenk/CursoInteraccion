$(document).foundation()


var contenedor = $('#contenedor');

$(document).ready(function(){

   cargar_blog();

})





function cargar( contenido ) {

   contenedor.fadeOut(1000, function(){

      contenedor.html( contenido )
      contenedor.fadeIn();

   })

}


function cargar_blog() {

   $.get( 'blog.html', function( resultado ) {
      cargar( resultado );
   })

}
