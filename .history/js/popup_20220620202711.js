start()

function start() {
    $("#meubotao").click(umafuncao)

    chrome.storage.sync.get("cor", function ({ cor }) {
        $("#cores").val(cor);
    });

    $('#cores').on('change', function () {
        var cor = $(this).find(":selected").val();
        umafuncao(cor)
    });

    $('#onemorebutton').on('click', function () {
        var id = $('#umidqualquer').val();
        umafuncao(id)
    });

}

function ativar() {
    $("#MeuSwitch")
}



async function umafuncao(cor) {

    // obtém a aba atual
    [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // envia mensagem para a aba atual
    chrome.tabs.sendMessage(currentTab.id, { cor: cor }, callback);

}


async function getcolor(id) {

    // obtém a aba atual
    [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // envia mensagem para a aba atual
    chrome.tabs.sendMessage(currentTab.id, { id: id }, callback);

}


// funcao que recebe a resposta da mensagem que foi enviada para alguma aba
function callback(response) {
    console.log("ufa, a mensagem conseguiu chegar!")
    console.log(response)
}