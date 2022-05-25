

start()


function start() {

    // toda vez que essa aba receber uma mensagem, a funcao callback sera chamada
    chrome.runtime.onMessage.addListener(callback);

}


function callback(request, sender, retorno) {

    console.log("recebi uma mensagem!")

    console.log(request)
    console.log(sender)

    $("body").css("background-color", "black");

    retorno({ url: window.location.href, resposta: "sucesso!" });
}