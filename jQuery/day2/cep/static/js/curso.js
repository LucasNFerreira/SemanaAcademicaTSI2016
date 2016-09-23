let resultado;
let rua = $('#rua');
let bairro = $('#bairro');
let cidade = $('#cid');
let estado = $('#est');

$(document).ready(function(){
    $('#btn').click(function(){ //Quando clicado no elemento input
        let cep = $('#cep').val();
        $.ajax({
            url: '//viacep.com.br/ws/' + cep + '/json/',
            datatype: 'json',
            success: function(data) {
                resultado = data;
                rua.val(data.logradouro);
                bairro.val(data.bairro);
                cidade.val(data.localidade);
                estado.val(data.uf);
                //alert(data);
            },
            beforeSend: function(){
                alert('antes de enviar');
            },
            complete: function(){
                alert('completo');
            }
        });
    });
});
