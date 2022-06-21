

start()


function start() {

    if('#flexSwitchCheckChecked' == 'true'){
    chrome.storage.sync.set("#flexSwitchCheckChecked", true);
    window.addEventListener('click', getcolorofelement);
    // toda vez que essa aba receber uma mensagem, a funcao callback sera chamada
    chrome.runtime.onMessage.addListener(callback);
    chrome.storage.sync.get("cor", function ({ cor }) {
        changeBackground(cor)
    });
    }
    if('flexSwitchCheckChecked' == 'false') {
        chrome.storage.sync.set("#flexSwitchCheckChecked", false);
        console.log("A extensão esta desativada")
    }
}

function getcolorofelement(e) {
     console.log(e.target)
     console.log(e.target.style.color)
     e.target.style.color= "rgb(255,215,0)"
}

function getcolor(id){
    myDivObj = document.getElementById(id)
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    console.log(myDivObjBgColor)
    console.log(document.getElementById(id).style.color)
}

function callback(request, sender, retorno) {

    console.log("recebi uma mensagem!")

    console.log(request)

    if(request.id !== null){
        getcolor(request.id)
    }
   
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
