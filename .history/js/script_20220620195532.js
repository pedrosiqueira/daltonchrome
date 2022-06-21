

start()


function start() {

    // toda vez que essa aba receber uma mensagem, a funcao callback sera chamada
    chrome.runtime.onMessage.addListener(callback);

    chrome.storage.sync.get("cor", function ({ cor }) {
        changeBackground(cor)
    });

}


function callback(request, sender, retorno) {

    console.log("recebi uma mensagem!")

    console.log(request)
   
    if (request.cor !== null) {
        changeBackground(request.cor)
    }

    retorno({ url: window.location.href, resposta: "sucesso!" });
}

function changeBackground(cor) {
    chrome.storage.sync.set({ cor: cor });
    console.log(cor)
    $("body").css("background-color", cor);
}
