//Declaração dos botões e da tela como constantes
const tela = document.querySelector('input[type=text]');
const botons = document.querySelector('input[type=button]');

//Para adicionar os elementos a tela
function addtela(value) {
    tela.value += value;
}

//Para limpar a tela
function limpatela() {
    tela.value = ''
}

//Ação do botão igual
function res() {
    try{
        tela.value = eval(tela.value)
    } catch(error) {
        tela.value = 'Erro'
    }
}