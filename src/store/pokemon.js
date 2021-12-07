const SET_POKEMON = "pokemon/SET_POKEMON"
const SET_STATS = "pokemon/SET_STATS"


export const setPokemon = (pokemon) => {

    return {
        type:SET_POKEMON,
        payload:pokemon
    }
}

export const setStats = (pokemon) => {
    return {
        type:SET_STATS,
        payload:pokemon
    }
}

export const getPokemonStats = (pokemon) => async dispatch => {
    for(const individual of pokemon){
        let res = await fetch(individual.url)
        res = await res.json()
        individual.stats = res
        let types = individual.stats.types.map(current=>current.type.name)
        if(types.includes("grass") || types.includes("bug") || types.includes("poison"))individual.stats.color = "green"
        else if(types.includes("fire"))individual.stats.color = "red"
        else if(types.includes("water"))individual.stats.color = "blue"
        else if(types.includes("psychic"))individual.stats.color = "purple"
        else if(types.includes("electric"))individual.stats.color = "rgb(187, 187, 8)"
        else if(types.includes("ground"))individual.stats.color = "brown"
        else if(types.includes("flying"))individual.stats.color = "grey"



    }
    dispatch(setStats(pokemon))
}

export const getPokemon = () => async dispatch => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    res = await res.json()
    // for(let result of res.results){
    //     let dataRes = await fetch(`${result.url}`)
    //     dataRes = await dataRes.json()
    //     result.data = dataRes
    //     console.log("?")
    // }
    console.log("result here: ",res)
    dispatch(setPokemon(res))
}


let initialState = {}
export default function pokemonReducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
      case SET_POKEMON:
          newState = action.payload
          return newState
        case SET_STATS:
            newState.current = action.payload
            return newState
      default:
        return newState;
    }
  }
