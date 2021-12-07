import logo from './logo.svg';
import './App.css';
import Pokemon from "./Components/pokemon"
import {useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {getPokemon} from "./store/pokemon"
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getPokemon())
  },[])
  return (
    <Pokemon/>
  );
}

export default App;
