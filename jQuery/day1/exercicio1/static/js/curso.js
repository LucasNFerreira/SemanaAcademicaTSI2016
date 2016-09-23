let texto = $('#texto');
let cont = $('#contagem');
let limpar = $('#limpar');

$(document).ready(function(){
    texto.keyup(function(){
        cont.text(texto.val().length);
        if(texto.val() == "python e foda"){
            $('img').removeClass('oculta');
            $('nav').css({'background-color': '#4DB6AC'});
        }else{
            $('img').addClass('oculta');
            $('nav').css({'background-color': '#ee6e73'})
        }
    });
    limpar.click(function() {
        texto.val('');
        cont.text(0);
    });
});
