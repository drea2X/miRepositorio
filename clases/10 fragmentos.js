function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//console.log imprime hello dojo//


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//console.log imprime hello 15//
/*  diagrama en T
variable    valor 
result      hello()
*/

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
// seria 15 + 3 lo que daria 18
//console.log imprime 18 

/* diagrama en T
variable    valor 
result      numPlus(3)
*/

var num = 15;
console.log(num);
//cosole.log im´prime 15
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
//console.log imprime 15,10

/*diagrama en T
variable      valor 
num            15
result       logAndReturn(10)
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
//console.log imrpime 20,15

/*diagrama en T 
variable       valor
num              15
result          timesTwo(10)
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
    // var y num *2 y retur y
}


var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
//console.log imprime 16
/* diagrama en T
variable          valor 
    y             num*2 
 result        timesTwoAgain(3) + timesTwoAgain(5)}

 */

function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
//console.log imprime 5,8 

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 //console.log imprime 5,8

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
//console.log imprime 5,6,3,5
//console.log imprime 19
/*diagrama en T
variable     valor 
result        2,3  2,1,3   2,1  2,3
sum           num 1 + num 2 