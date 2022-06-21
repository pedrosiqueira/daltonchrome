

start()


function start() {
    
    window.addEventListener('click', getcolorofelement);

    // toda vez que essa aba receber uma mensagem, a funcao callback sera chamada
    chrome.runtime.onMessage.addListener(callback);
}

function callback(request, sender, retorno) {

    console.log("recebi uma mensagem!")

    console.log(request)

    if(request.v !== null){
        onof(request.v)
    }

    if(request.id !== null){
        getcolor(request.id)
    }

    retorno({ url: window.location.href, resposta: "sucesso!" });
}

function getcolorofelement(e) {
     console.log(e.target)
     console.log(e.target.style.color)
     e.target.style.color= "rgb(255,215,0)"
}

function onof(v){
    if(v == "true"){
        getcolorofelement()
    }
}

function getcolor(id){
    myDivObj = document.getElementById(id)
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    console.log(myDivObjBgColor)
    console.log(document.getElementById(id).style.color)
}