function botao4() {
    //ao apertar o botao executa esta função
    let votosval = parseFloat(document.querySelector("#votosval").value);
    let votosnulos = parseFloat(document.querySelector("#votosnull").value);
    let votosbrancos = parseFloat(document.querySelector("#votoswhite").value);
    //nas 3 linhas acima coleto os valores(entrada) e armazeno em algumas variáveis
    //por meio do querySelector 
    let total = votosval + votosbrancos + votosnulos;
    //equação do total de votos

    document.querySelector(".result4").innerHTML=(`Total de votos: ${total}<br>
    Percentual de votos brancos: ${((100 * votosbrancos)/total).toFixed(2)}%
    <br>Percentual de votos nulos: 
    ${((votosnulos * 100)/total).toFixed(2)}%<br>
    Percentual de votos válidos: ${((votosval * 100)/total).toFixed(2)}%`);
    //printei todos os valores por meio de um parágrafo só usando <br>


} 