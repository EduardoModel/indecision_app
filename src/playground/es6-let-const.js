//O problema de var é que tu pode definir outra variável com o mesmo nome ao longo do código
//sobreescrevendo a variável antiga. Redefenir e atribuir outro valor
var nameVar = 'Wololo'
var nameVar = 'Mike'
console.log('nameVar', nameVar)


//Com o let, não é possivel definir outra variável com o mesmo nome
let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

//var: pode atribuir um novo valor e declarar outra variavel com o mesmo nome
//let: pode atribuir um novo valor mas não declarar outra variável com o mesmo nome
//const: só pode atribuir uma vez o valor e não pode declarar outra variável

//var dentro de um bloco pode ser acessada fora dele
//const já não

/*
let teste 
if(qq_coisa){
	teste= 3
}
console.log(teste)

^^^^^
essa é a forma de fazer atribuições que são modificadas dentro de blocos
*/