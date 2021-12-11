console.log(typeof Object)
console.log(typeof new Object) //instanciando uma função pode fazer sem os ()

const Cliente = function()  {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6) /class tbm cria uma função
console.log(typeof Produto)
console.log(typeof new Produto())