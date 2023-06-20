/*
código de validação de formulario de login
*/
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;

    if(!email || !senha){
        alert("campos de preenchiemento obrigatorio por Favor preencher");
    }else{
        alert("campos preenchido com sucesso");
    }
}

