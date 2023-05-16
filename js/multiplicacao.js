
document.write("<div >");
document.write("<h1 id='titulo2'> Multiplicação de Matrizes </h1>");

document.write("<h3 id='texto'> A multiplicação de matrizes possui algumas regras que devem ser seguidas. Cada linha da primeira matriz deve multiplicar por todas as colunas da segunda. É necessário que o número de colunas da primeira matriz seja igual ao número de linhas da segunda.</h3>");

var matriz1 = [];
matriz1.push([1, 2, 3]);
matriz1.push([3, 8, -1]);
matriz1.push([2, 4, 3]);
console.table(matriz1);

var matriz2 = [];

matriz2.push([2, 6, 4]);
matriz2.push([4, 0, 5]);
matriz2.push([8, -8, 3]);

console.table(matriz2);

document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);

}
document.write("</table>");

document.write("<p class=gg>   *  </p>");

document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>")
document.write("<p class=gg>   =   </p>");

matrizr = [];
for (var i = 0; i < 3; i++) {
    matrizr.push([]);
    for (var x = 0; x < 3; x++) {
        matrizr[i][x] = 0;
        for (var z = 0; z < 3; z++) {
            matrizr[i][x] += matriz1[i][z] * matriz2[z][x];
        }
    }
}

document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matrizr[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
