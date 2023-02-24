var bot_exec = document.getElementById('executar')
bot_exec.addEventListener('click',executar)
var bot_limp = document.getElementById('limparCampo')
bot_limp.addEventListener('click',limpar)
var oct_html = 0;
var oct_js = 0;
var tex_html = document.getElementById('texthtml').value;
var tex_js = document.getElementById('textjs').value;


function executar(){
    oct_html = document.getElementById('inserirhtml').style.display = 'none'
    oct_js = document.getElementById('inserirjs').style.display = 'none'
}

function limpar(){
    oct_html = document.getElementById('inserirhtml').style.display = 'block'
    oct_js = document.getElementById('inserirjs').style.display = 'block'
    document.getElementById('texthtml').innerHTML = ""
    document.getElementById('textjs').innerHTML = ""



}