let contagem_player = 0;//score player
let contagem_cpu = 0;//socre cpu
let contagem = 0; //round counter

function Epedra() {
    game(0);
}

function Epapel() {
    game(1);
}

function Etesoura() {
    game(2);
}

function game(E_player) {
    document.getElementById("narrador").innerHTML = ""

    let cpu = Math.ceil(Math.random() * 3) - 1; //generate a random number 0-2


    if (E_player === cpu) {
        document.getElementById("narrador").innerHTML = "Empate"

    } else if ((E_player - cpu) === -2 || E_player - cpu === 1) {
        contagem_player += 1;
        document.getElementById("narrador").innerHTML = "Vitoria do Player"
        document.getElementById("player-score").innerHTML = contagem_player;
    } else {
        contagem_cpu += 1;
        document.getElementById("narrador").innerHTML = "Vitoria da Cpu"
        document.getElementById("cpu-score").innerHTML = contagem_cpu;
    }
    contagem +=1
    document.getElementById("round-number").innerHTML = contagem;
    if(contagem === 5){
        vencedor();
    }
}

function vencedor() {
    if (contagem_cpu === contagem_player) {
        document.getElementById("result").innerHTML = "Empate";
        fim_jogo();
    } else if (contagem_cpu >= contagem_player) {
        document.getElementById("result").innerHTML = "Você perdeu";
        fim_jogo();
    } else{
        document.getElementById("result").innerHTML = "Você ganhou";
        fim_jogo();
    }
}
function fim_jogo(){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled= true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("next-round").disabled = false;
}
function PlayAgain() {
    window.location.reload();

}