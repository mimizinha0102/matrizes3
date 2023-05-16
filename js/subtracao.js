 document.write("<div >");
 document.write("<h1 id= 'titulo2'>Subtração de Matrizes </h1>");
 document.write ("</div>")
 document.write("<h3 id='texto' > As duas matrizes envolvidas na subtração devem ser da mesma ordem. Assim como na operação de adição, os termos de uma matriz devem ser subtraídos pelo termo de outra que se encontrem na mesma posição. O resultado será uma matriz de mesma ordem das utilizadas na operação.</h3>");

var matriz1 = [];
matriz1.push([8, 1, 11]);
matriz1.push([2, -5, 20]);
matriz1.push([15, -7, 13]);
console.table(matriz1);

var matriz2 = [];

matriz2.push([3, -1, 11]);
matriz2.push([3, 9, -7]);
matriz2.push([14, -8, 4 ]);

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

document.write("<p class=gg>   -   </p>");

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

document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (x = 0; x < matriz1[i].length; x++) {
        var sub = matriz1[i][x] - matriz2[i][x];
        linha = linha + "<td>" + sub + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");





















// //calcúlo 2
// //Subtração
// document.write("<br></br>");
// document.writeln(" ");
// var matriz4 = [];
// var matriz = [];

// matrizt = prompt("digite o tamanho da matriz ");
// for(var i = 0 ; i < matrizt ; i++){
//     matriz.push([0,0,0]);
//     for(var x = 0 ; x< matrizt ; x++){
//         matriz[i][x] = Math.floor(Math.random()*100);
//     }
// }



// var matriz2 = [];



// for(var i = 0 ; i < matrizt ; i++){
//     matriz2.push([0,0,0]);
//     for(var x = 0 ; x< matrizt ; x++){
//         matriz2[i][x] = Math.floor(Math.random()*100);
//     }
// }

// document.write("<table border='1' class=direita>");
// for( i = 0 ; i < matrizt ; i++){
//     var linha = "<tr>" ; 
//     for( x = 0 ; x < matrizt ; x++){
//         linha = linha + "<td>" + matriz[i][x] + "</td>";
//     }
//     linha = linha + "</tr>";
//     document.write(linha);
// }
// document.write("</table>");

// document.write("<p class=gg>   -   </p>");
 
// document.write("<table border='1' class=direita>");
// for( i = 0 ; i < matrizt ; i++){
//     var linham2 = "<tr>" ; 
//     for( x = 0 ; x < matrizt ; x++){
//         linham2 = linham2 + "<td>" + matriz2 [i][x] + "</td>";
//     }
//     linham2 = linham2 + "</tr>";
//     document.write(linham2);
// }
// document.write("</table>");

// for(var i = 0 ; i < matrizt ; i++){
//     matriz4.push([0,0,0]);
//     for(var x = 0 ; x < matrizt ; x++){
//         matriz4[i][x] =  matriz[i][x] - matriz2[i][x];
//     }
// }

// document.write("<p class=gg>   =   </p>");

// document.write("<table border='1' class=direita>");
// for( i = 0 ; i < matriz4.length ; i++){
//     var linham2 = "<tr>" ; 
//     for( x = 0 ; x < matriz4[i].length ; x++){
//         linham2 = linham2 + "<td>" + matriz4[i][x] + "</td>";
//     }
// linham2 = linham2 + "</tr>";
// document.write(linham2);
// }
// document.write("</table>");

// multiplicação

//var matriz = new Array();
//matriz.push([2, -2]); 
//matriz.push([4, -4]); 
//console.table(matriz);

/*document.write( "<table border=1>");
for (i = 0; i < matriz.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz[i].length; x++) {
linha = linha + "<td>" + matriz[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");
*/