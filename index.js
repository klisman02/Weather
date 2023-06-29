const key = "ec7f00951b22dcf9ea36089755070e0c";

async function buscarCidade(cidade){

    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q={${cidade}}&appid={${key}}`).then( resposta => {
        return resposta.json();
    })
    console.log(dados);
   

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value //VALUE retorna apenas o valor que está dentro do query selecionado. Por exemplo = <H1>Olá Mundo</H1>. Quando seleciono com query selector e .value estou retornando apenas o Olá Mundo

    buscarCidade(cidade);
}