// Creare l’header come da screeshot allegato.
// Ogni voce di menù avrà un suo dropdown menù che viene fuori al click.
// Dettagli
// 1. prendiamo come ref lo screeshot;
// 2. il dropdown esce fuori al click non all’hover (sennò  a qualcuno giustamente glie verrebbe da fare in css);
// 3.basta che fate la parte di header/menu (appunto quello che c’è in screeshot);
// 4.tenete conto che su questo avete più elementi uguali da comandare e ognuno chiaramente rende visibile solo il proprio dropdown;
// 5.consiglio: degli eventuali casi limte/controlli (es. voglio che sia aperto solo un dropdown alla volta, preoccupatevi alla fine).
$(document).ready(function () {

$("li.dropitem1").click(function(m) {
  $(".dropdown1").toggleClass("dbloc");
});

$("li.dropitem2").click(function() {
  $(".dropdown2").toggleClass("dbloc");
});

$("li.dropitem3").click(function() {
  $(".dropdown3").toggleClass("dbloc");
});

$("li.dropitem4").click(function() {
  $(".dropdown4").toggleClass("dbloc");
});

// FUNZIONI

// devo fare una sezione per le funzioni
// probabilmente per aprire un dropdown uno alla volta devo usare il this?
// devo scrivere nella condizione l'esclusione di tutti gli altri dropdown ai quali va rimosso il dbloc eccetto quello cliccato
function toggleClass(m) {
if ($(".dropdown1").toggleClass("dbloc")) {
  $(".dropdown2").removeClass("dbloc");
  $(".dropdown3").removeClass("dbloc");
  $(".dropdown4").removeClass("dbloc");

} else {

}
}


});
