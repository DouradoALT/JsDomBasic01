function botao5() {
    //ao apertar o botao a função é executada
    let sal = parseFloat(document.querySelector("#salário").value);
    let perc = parseFloat(document.querySelector("#perc").value);
    //nos dois valores acima o valor é coletado(entrada) pelo querySelector e
    //armazena em uma variável
    let calc = perc/100;
    //neste calculo eu divido o percentual de porcentagem por 100 pra obter um 
    //valor quebrado, por exemplo de 10 para 0.1 obtendo assim 10%
    let aumento = (calc*sal) + sal;
    //aqui eu calculo o aumento do funcionário
    document.querySelector(".result5").innerHTML=(`Aumento de: R$ ${(calc*sal).toFixed(2)}
    <br>Salário final: R$: ${aumento.toFixed(2)}`);
    //utilizo o query selector e o innerHTML pra jogar esses valores 
    //no parágrafo de classe result5
}