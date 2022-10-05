function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//console.log imprime [paula, smith, calle principal 1234, st. louis, mo, 12345]

 /* diagrama en T

 variable                   valores
 auntContacInfo       paula, smith, calle principal 1234, st. louis, mo, 12345
*/


 function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//cosole.log imprime [brocoli,helado,croqueta de papa]//
/*
diagrama en T

variable                        valores 

produce                   [manzanas, naranjas]               
frozen                    [brocoli, helado]
frozen                    [brocoli, helado, croqueta de papa]
*/
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
}
//console.log imprime [bambi, beetlejuice, toy story, zoro]

/* 
diagrama em T

variable             valor
movieLibraby    [bambi, e.T, toy story]
movieLibraby    [bambi,e.T, toy story, zoro]
 movieLibraby   [bambi,beetlejuice, toy story, zoro]

*/