function botao6() {//ao apertar o botao essa função é executada
    let custo = parseFloat(document.querySelector("#fab").value);
    //coleto a informação do input pelo query selector, declaro seu tipo
    //como real pois toda entrada de dado em js vem como padrao em STRING
    let percent = 0.28*custo;
    //calculo de porcentagem indicado na atividade
    let impostos = 0.45*custo;
    //calculo de porcentagem indicado na atividade
    document.querySelector(".result6").innerHTML=(`Custo final do carro: R$ 
    ${(custo+percent+impostos).toFixed(2)}`);
    //impressão do resultado em uma parágrafo com class = "result6" por via do query
    //selector
}