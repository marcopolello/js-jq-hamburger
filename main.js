// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!

//voglio che al click di <i> class="fas fa-bars" il div class="hamburger-menu diventi display block"

// var acceso = false;
// var x = window.matchMedia("(max-width: 1000px)")
//
// $('i.fas.fa-bars').click(function(){
//   if (acceso === true) {
//     $('.hamburger-menu').toggle('display') === 'block';
//   } else if (acceso === false && x.matches) {
//     $('.hamburger-menu').toggle('display') === 'none';
//   }
// });
// $('i.fas.fa-times').click(function(){
//   if (acceso === true) {
//     $('.hamburger-menu').toggle('display') === 'none';
//   } else {
//     $('.hamburger-menu').toggle('display') === 'none';
//   }
// });


$('i.fas.fa-bars').click(function(){
  $('.hamburger-menu').addClass("active");
});
$('i.fas.fa-times').click(function(){
  $('.hamburger-menu').removeClass("active");
});
