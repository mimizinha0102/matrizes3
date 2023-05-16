//calcúlo 1
document.write("<div >");
document.write("<h3 id= 'texto'><hr>  A matriz quadrada é um tipo especial de matriz. Uma matriz é classificada como quadrada quando possui o número de linhas igual ao número de colunas. A matriz quadrada possui aplicações importantes, como na resolução de sistemas lineares. Ela possui duas diagonais, a principal e a secundária, que são essenciais para se calcular o determinante da matriz. O determinante da matriz é um número associado à matriz quadrada. </h3>");
document.write("<h3 id= 'texto' >Para cada tipo de operação, será apresentado um exemplo.</h3>")
document.write("<h1 id= 'titulo2'> Adição de Matrizes </h1>");

document.write("<h3 id= 'texto'> A adição de matrizes é uma operação realizada entre duas matrizes, onde cada elemento correspondente das matrizes é somado. Para que a adição seja possível, as matrizes devem ter a mesma dimensão, ou seja, o mesmo número de linhas e colunas.</h3>");
document.write("<h3 id='texto'> Somamos os termos que se encontram em posições iguais. Por exemplo, o elemento a11 da matriz A deve ser somado com o termo que se encontra na primeira linha e primeira coluna da matriz B.</h3>")
document.write("</div>");

var matriz = [];
var matriz2 = [];
var matriz3 = [];

matrizt = prompt("Digite o tamanho da matriz que você deseja: ");


for (var i = 0; i < matrizt; i++) {
    matriz.push([0, 0, 0]);
    for (var x = 0; x < matrizt; x++) {
        matriz[i][x] = Math.floor(Math.random() * 100);
    }
}
document.write("<table border='1' class=direita>");
for (i = 0; i < matrizt; i++) {
    var linha = "<tr>";
    for (x = 0; x < matrizt; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

document.write("<p class=gg>   +   </p>");

for (var i = 0; i < matrizt; i++) {
    matriz2.push([0, 0, 0]);
    for (var x = 0; x < matrizt; x++) {
        matriz2[i][x] = Math.floor(Math.random() * 100);
    }
}

document.write("<table border='1' class=direita>");
for (i = 0; i < matrizt; i++) {
    var linham2 = "<tr>";
    for (x = 0; x < matrizt; x++) {
        linham2 = linham2 + "<td>" + matriz2[i][x] + "</td>";
    }
    linham2 = linham2 + "</tr>";
    document.write(linham2);
}
document.write("</table>");


document.write("<p class=gg>   =   </p>");

for (var i = 0; i < matrizt; i++) {
    matriz3.push([0, 0, 0]);
    for (var x = 0; x < matrizt; x++) {
        matriz3[i][x] = matriz[i][x] + matriz2[i][x];
    }
}

document.write("<table border='1' class=direita>");
for (i = 0; i < matrizt; i++) {
    var linham3 = "<tr>";
    for (x = 0; x < matrizt; x++) {
        linham3 = linham3 + "<td>" + matriz3[i][x] + "</td>";
    }
    linham3 = linham3 + "</tr>";
    document.write(linham3);
}

document.write("</table");
