let a = 3

global.b = 123

this.c = 459
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca sem var e let!
abc = 3 // não faça isso nunca!
console.log(global.abc)

//module.exports = {e: 456, f: false, g: 'Teste}
