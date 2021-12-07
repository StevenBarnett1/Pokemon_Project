const SET_POKEMON = "pokemon/SET_POKEMON"


export const setPokemon = (pokemon) => {

    return {
        type:SET_POKEMON,
        payload:pokemon
    }
}

export const getPokemon = () => async dispatch => {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    res = await res.json()
    dispatch(setPokemon(res))
}


let initialState = {}
export default function pokemonReducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
      case SET_POKEMON:
          newState = action.payload
          return newState
      default:
        return newState;
    }
  }
