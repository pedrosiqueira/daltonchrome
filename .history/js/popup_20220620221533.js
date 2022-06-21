start()

function start() {

    chrome.storage.sync.get("v", function ({ v }) {
        $("#flexSwitchCheckChecked").val(v);
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


async function onoff(v) {

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