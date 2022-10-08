function botao2() {//ao aperta o botao no html esta função
    //é executada.
    let anos = parseInt(document.querySelector("#idade_anos").value);
    //coleta de dados do input por meio do queryselector
    let meses = parseInt(document.querySelector("#idade_meses").value);
    //mesma coisa
    let dias = parseInt(document.querySelector("#idade_dias").value);
    //mesma coisa
    let calc = (anos*365) + (meses*30) + dias;
    //equação pra chega no meu resultado
    document.querySelector(".result2").innerHTML=(`Você viveu ${calc} dias`);
    //imprimindo o resultado no meu parágrafo html indentificaco com
    //class = "result2"
}