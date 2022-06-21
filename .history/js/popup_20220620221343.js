start()

function start() {

    chrome.storage.sync.get("cor", function ({ cor }) {
        $("#cores").val(cor);
    });

    $('#onemorebutton').on('click', function () {
        var id = $('#umidqualquer').val();
        getcolor(id)
    });

    $('#flexSwitchCheckChecked').on('click', function(){
        var v = $(this).find(":checked").val();
        onoff(v)
    });

}

function ativar() {
    $("#MeuSwitch")
}

async function getcolor(id) {

    // obtém a aba atual
    [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // envia mensagem para a aba atual
    chrome.tabs.sendMessage(currentTab.id, { id: id }, callback);

}


async function onof(v) {

    // obtém a aba atual
    [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // envia mensagem para a aba atual
    chrome.tabs.sendMessage(currentTab.id, { v: v }, callback);

}



// funcao que recebe a resposta da mensagem que foi enviada para alguma aba
function callback(response) {
    console.log("ufa, a mensagem conseguiu chegar!")
    console.log(response)
}