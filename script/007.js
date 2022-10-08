function botao7() {
    let adc;	
    let i = 'S';
    let calc;
    let cont = 0;
    let final = 0;
    let p = document.querySelector(".result7");
    //inicializo os contadores que precisarei 
    let sal = parseFloat(prompt("Digite o seu salário: "));
    //entrada de dados do salário pelo prompt
    while (i === 'S') {
        //enquanto minha variável for "S" meu contador não para
        adc = parseFloat(prompt("Qual o valor deste carro:  "));
        //entrada de dados
        calc = adc*0.05;
        //5 porcento do valor do carro
        final = final + calc;
        //armazenador contador
        cont = cont + 1;
        //incrementação contador de carros vendidos
        console.log(`Você recebeu uma comissão de R$ ${calc.toFixed(2)} ao vender este carro!`);
        //saída da dados da comissão imediata
        i = String(prompt("Mais um carro vendido [S/n]: ")).toUpperCase();
        //pede confirmação para se quer continuar
        //toUpperCase = quando o valor for "s" minusculo ele converte para maiúsculo e
        //continua o contador
    
    }
    p.innerHTML = (`Você vendeu ${cont} carros e ganhou um aumento de: ${final.toFixed(2)} 
    totalizando uma receita de salário 
    final de ${(sal + final).toFixed(2)}`);
    
    //imprime o salário final com a comissão do atendente

}
