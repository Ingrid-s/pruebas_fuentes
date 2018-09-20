let button = document.getElementById('abrir_modal');
let modal = document.getElementById('mi_modal');
let modalContainer = document.getElementById("container");
let close = document.getElementById("close");

button.addEventListener('click', function(){
    modal.style.display = 'block';
});

close.addEventListener ('click', function(){
    modal.style.display = 'none';
});

//https://www.youtube.com/watch?v=YonqjrU2btI
//minuto 23:58 falta esconder el modal cuándo das click fuera del mismo
window.addEventListener ('click', function(e) {
   if (e.target  == modal) {
    modal.style.display = 'none';
   }
});

