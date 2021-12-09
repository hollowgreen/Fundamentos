function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // analisa o primeiro se for true nem olha pro segundo.
    const comprarTv50 = trabalho1 && trabalho2 // analisa se os dois serão iguais
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou diferente do trabalho 2
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}
console.log(compras(true, true)) //trabalhei os dois dias!
console.log(compras(true, false)) //trabalhei 1 dia!
console.log(compras(false, true)) // faltei e trabalhei 1 dia
console.log(compras(false, false)) // não trabalhei vagabundo!