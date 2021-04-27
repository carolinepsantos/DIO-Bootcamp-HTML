/*
    Declaração de Variáveis
*/
// Pegando o id do elemento canvas criado no index.html
let canvas = document.getElementById('cobra');
// Defininfo o contexto do canvas
let context = canvas.getContext("2d");
// Definindo o tamanho do frame
let frame = 16;
// Definindo a nossa cobra
let cobra = [];
// Definindo a posição inicial da cobra
cobra[0] = {
    x: 14 * frame,
    y: 14 * frame
}

//  Definindo a comida
let comida = {
    x: Math.floor(Math.random() * 27 + 1) * frame,
    y: Math.floor(Math.random() * 27 + 1) * frame,
}
// Definindo a direção inicial
let direcao = "right"
/*
    Declaração das funções
*/
// Criar o fundo do frame onde o jogo acontecerá
function criarFundoJogo() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 28 * frame, 28 * frame);
}
// Criando a cobra, principal personagem do jogo
function criarCobra() {
    for(var i = 0; i < cobra.length; i++) {
        context.fillStyle = "#01bc75";
        context.fillRect(cobra[i].x, cobra[i].y, frame, frame);
    }
}

// Criando a comida
function criarComida() {
    context.fillStyle = "#fe4856";
    context.fillRect(comida.x, comida.y, frame, frame);
}

// Função para atualizar a direção da cobrinha de acordo com a tecla apertada
document.addEventListener('keydown', atualizarDirecao);
function atualizarDirecao(event) {
    if(event.keyCode == 37 && direcao != "right")
        direcao = "left";
    if(event.keyCode == 38 && direcao != "down")
        direcao = "up";
    if(event.keyCode == 39 && direcao != "left")
        direcao = "right";
    if(event.keyCode == 40 && direcao != "up")
        direcao = "down";
}

// Função base do jogo
function iniciarJogo() {
    // Fazer a cobrinha aparecer do outro lado do tabuleiro quando este "acabar"
    if (cobra[0].x > 27 * frame && direcao == "right") cobra[0].x = 0;
    if (cobra[0].x < 0 * frame && direcao == "left") cobra[0].x = 28 * frame;
    if (cobra[0].y > 27 * frame && direcao == "down") cobra[0].y = 0;
    if (cobra[0].y < 0 * frame && direcao == "up") cobra[0].y = 28 * frame;

    for(var i = 1; i < cobra.length; i++) {
        if(cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
            clearInterval(jogo);
            alert('FIM DE JOGO 😔');''
        }
    }
    
    criarFundoJogo();
    criarCobra();
    criarComida();

    //  Atualizando a direção da cobra e da comida
    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao == "right") 
        cobraX += frame;
    if(direcao == "left") 
        cobraX-= frame;
    if(direcao == "up") 
        cobraY -= frame;
    if(direcao == "down")  
        cobraY  += frame;

    if(cobraX != comida.x || cobraY != comida.y)   
        cobra.pop();
    else {
        comida.x = Math.floor(Math.random() * 27 + 1) * frame;
        comida.y = Math.floor(Math.random() * 27 + 1) * frame;
    }

    let novoTopo = {
        x: cobraX,
        y: cobraY,
    }

    cobra.unshift(novoTopo);
}
 
// Variavél definir a criação e começo do jogo
let jogo = setInterval(iniciarJogo, 100);
