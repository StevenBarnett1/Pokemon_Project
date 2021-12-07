import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {getPokemon} from "../../store/pokemon"
import { getPokemonStats } from "../../store/pokemon"
import "./pokemon.css"

const Pokemon = () => {
    const dispatch = useDispatch()

    let [currentIndex,setCurrentIndex] = useState(0)
    let results = useSelector(state=>state.pokemon.results)
    let currentPokemon = useSelector(state=>state.pokemon.current)
    console.log(results)

    useEffect(()=>{
        if(results)dispatch(getPokemonStats(results.slice(currentIndex,currentIndex+10)))
    },[currentIndex,results])

    const nextPage = () => {
        setCurrentIndex(currentIndex+10)
    }

    const previousPage = () => {
        setCurrentIndex(currentIndex-10)
    }

    const rowClick = () => {
        
    }

    console.log("CURRENT STATS: ",currentPokemon)
    return (
        <div id = "pokemon-page-outer">
            <h1 id = "pokemon-heading">Pokemon</h1>
            <table id = "pokemon-table">
                <tr>
                    <th>Name</th>
                    <th>Abilities</th>
                    <th>Forms</th>
                    <th>Species</th>
                    <th>Types</th>
                </tr>
                {currentPokemon && currentPokemon.map(individual => (
                    <tr className = "pokemon-data" key = {individual.name} onClick = {()=>rowClick()}>
                        <td style = {{color:individual.stats.color}}>{individual.name}</td>
                        <td style = {{color:individual.stats.color}}>{individual.stats.abilities.map((current)=>(<div key = {current.ability.name}>{current.ability.name}</div>))}</td>
                        <td style = {{color:individual.stats.color}}>{individual.stats.forms.map((form)=>(<div key = {form.name}>{form.name}</div>))}</td>
                        <td style = {{color:individual.stats.color}}>{individual.stats.species.name}</td>
                        <td style = {{color:individual.stats.color}}>{individual.stats.types.map((current)=>(<div key = {current.type.name}>{current.type.name}</div>))}</td>
                    </tr>
                ))}
            </table>
            <div id = "page-buttons">
                <button onClick = {()=>previousPage()} style = {currentIndex === 0 ? {visibility:"hidden"} : {visibility:"visible"}}>Previous Page</button>
                <button onClick = {()=>nextPage()}>Next Page</button>
            </div>

        </div>
    )
}

export default Pokemon
