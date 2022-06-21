

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
    if(request.cor == "default"){
        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
            chrome.tabs.reload(arrayOfTabs[0].id);
        });
    }
    if (request.cor !== "default") {
        changeBackground(request.cor)
    }

    retorno({ url: window.location.href, resposta: "sucesso!" });
}

function changeBackground(cor) {
    chrome.storage.sync.set({ cor: cor });
    console.log(cor)
    $("body").css("background-color", cor);
    $("div").css("color", "white");
}
