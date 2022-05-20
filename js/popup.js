start()

function start() {
    $("#meubotao").click(umafuncao)
}


async function umafuncao() {

    // obtém a aba atual
    [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // envia mensagem para a aba atual
    chrome.tabs.sendMessage(currentTab.id, { nome: "Carol", curso: "TADS", orientador: "pedro" }, callback);


}

// funcao que recebe a resposta da mensagem que foi enviada para alguma aba
function callback(response) {
    console.log("ufa, a mensagem conseguiu chegar!")
    console.log(response)
}