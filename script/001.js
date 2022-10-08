function botao() {
    //apartir do momento que aperto o botao no html ele
    //executa esta função
    var n1=Number(document.querySelector(".n1").value);
    //entrada de dados por meio do query selector puxa o valor do input
    document.querySelector("#result").innerHTML=(`O número digitado é ${n1} e 
    seu antecessor é ${(n1 - 1)}`);
    //nestas 2 linhas eu printo a minha varíavel junto com o resultado
    //em um parágrafo indentificado com id = "result"
}