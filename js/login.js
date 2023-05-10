//CRIANDO OBJETOS
var usuario1 = {
    usuarioEmail : "murilocarlosm@hotmail.com",
    usuarioSenha : "12052005",
    usuarioGenero : "m",
    gravarDados : true
}

var usuario2 = {
    usuarioEmail : "m1@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
console.log(listaDeUsuarios);

addEventListener("click", (evt)=>{
    
    if(evt.target.id == "btnSubmit"){
        
        var inputEmail = document.querySelector("#idEmail");
        var inputPass = document.querySelector("#idPass");

        try {
            
            listaDeUsuarios.forEach((usuario)=>{
    
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            
            if(msg == "VALIDADO"){
                msgStatus.setAttribute("style","color:#00ff00;");
                msgStatus.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>";
            }else{
                msgStatus.setAttribute("style","color:#ff0000;");
                msgStatus.innerHTML = "<span><strong>Senha ou nome de usuário inválidos!</strong></span>";
            }
            
        }




    }
});