function botao3 () {
    //ao apertar o botao está função é executada
    let altura = parseFloat(document.querySelector("#altura").value);
    //entrada de dados do meu valor input por meio do query selector 
    let comprimento = parseFloat(document.querySelector("#comprimento").value);
    //mesma coisa
    let area = altura * comprimento;
    //equaçao do calculo da minha area (base x altura)
    document.querySelector(".result3").innerHTML=(`A area do seu retângulo é ${area} cm²`);
    //print do resultado da minha area no parágrado indentificado com class = "result3"
}