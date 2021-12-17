const https = require("https");

//AsyncAwait y Promesas

function obtenerpokemon(pokemon){
    return new Promise((resolve,reject) => {
        https
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
            let datos = " ";

            //fragmentos de la api
            resp.on("data", (chunk) => {
                datos += chunk;
            })
            
            resp.on("end", () => {

                datos = JSON.parse(JSON.stringify(datos))
                resolve(datos)
            })
        })
            .on("error", (err) =>{
                reject(err.message)
            })

    });
}

const pokemones = [
    "bulbasur",
    "charmader",
    "squirtle",
    "pidgey",
    "pikachu",
    "rattata",
    "alakazam",
    "onix",
    "mew",
    "wigglytuff",
  ];

  async function atraparPokemones(pokemones){
      try{

        let resultados = await Promise.all(
            pokemones.map(async (pokemon) => {
                let resultados = await obtenerpokemon(pokemon)
                console.log(`Pokemon atrapado ${pokemon}`);
                return resultados;
            })
        );
        return resultados

      }catch (error){
          console.error("Error",error);


      }
  }

  atraparPokemones(pokemones)