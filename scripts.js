const form = document.getElementById('form');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonHp = document.getElementById('pokemon-hp');
const pokemonAtack = document.getElementById('pokemon-atack');
const pokemonDefense = document.getElementById('pokemon-defense');
const pokemonAsk = document.getElementById('pokemon-ask');

let pokemon = "pikachu";

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!pokemonAsk.value) {
    alert("Digite o nome do pokemon que deseja");
    return;
  }

  pokemon = pokemonAsk.value
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Pokémon não encontrado. Verifique se o nome que digitou está correto.");

  const data = await response.json();

  pokemonImage.src = data.sprites.front_default;
  pokemonName.textContent = data.name;
  pokemonHp.textContent = `HP: ${data.stats[0].base_stat}`;
  pokemonAtack.textContent = `Ataque: ${data.stats[1].base_stat}`;
  pokemonDefense.textContent  = `Defesa: ${data.stats[2].base_stat}`;  
  } catch (error) {
    pokemonAsk.value = " ";
    alert(error.message);
    
  }
})
