/*- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;*/

let number1 =Number(prompt('Digite o primeiro número'))
let number2 = Number(prompt('Digite o segundo número'))
let sum, sub, div, mul, restdiv;

if(sum == NaN){
  alert('Informações inválidas')
}



sum = number1 + number2
sub = number1 - number2
div = number1 / number2
mul = number1 * number2
restdiv = number1 % number2

alert('a soma é ' + sum)
alert('a subtração é ' + sub)
alert('a divisão é ' + div)
alert('a multiplicação é ' + mul)
alert('o resto da divisão é ' + restdiv)

if(number1 == number2){
  alert('números são iguais')
}
else{
  alert('números são diferentes')
}

if(sum % 2 == 0){
  alert('o número é par')
} else{
  alert('o número é impar')
}



