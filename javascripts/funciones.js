function FuncNoDisp() {
    alert("Lo sentimos, esta opción no está disponible");
}

//Se encarga de mostrar el botón cuando se hace scroll
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
    $('.arrowtop').fadeIn();
  } else {
    $('.arrowtop').fadeOut();
  }
});
//Se encarga de subir60 al top al hacer clic en el botón
function arriba(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
}
