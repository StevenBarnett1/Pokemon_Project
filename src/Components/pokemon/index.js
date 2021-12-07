import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {getPokemon} from "../../store/pokemon"

const Pokemon = () => {
    let pokemon = useSelector(state=>state.pokemon)
    if(pokemon)console.log(pokemon.results)
    return (
        <h1>Pokemon Page</h1>
    )
}

export default Pokemon
