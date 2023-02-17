
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon1 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
}

console.log(pokemon1, copiaPokemon1)

pokemon1.ataques = []

const ataqueCriado = {nome: 'Investida', dano: 40, tipo: 'Normal', precisão: 100 }

pokemon1.ataques.push(ataqueCriado)
console.log(pokemon1)

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const segundoPokemon = {
    ...pokemon1, nome: "Squirtle", tipo: "Água"}

    segundoPokemon.ataques = []


const ataque1 = { nome: "Investida", dano: 40, tipo: "Normal", precisao: 100}
  
segundoPokemon.ataques.push(ataque1)
  




