import { Modal } from '../../context/Modal';
import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import { toggleModalView } from '../../store/modal';

import "./Modal.css"
function PokemonModal(props) {
  const dispatch = useDispatch()

  const modalView = useSelector(state => state.modal.modalView)
  const modalInfo = useSelector(state => state.modal.modalInfo)

  console.log("INFO: ",modalInfo)

  const handleOnModalClose = () => {
    dispatch(toggleModalView(false))
  }

  if(!modalView)return null

  return (
    <>
      {modalView && (
        <Modal onClose={() => handleOnModalClose()}>
          <div className = "modal-item"><div>Name:</div><div> {modalInfo && modalInfo.name}</div></div>
          <div className = "modal-item"><div>Species:</div><div> {modalInfo && modalInfo.stats.species.name}</div></div>
          <div className = "modal-item"><div>Types:</div><div> {modalInfo && modalInfo.stats.types.map(current => (<div key = {current.type.name}>{current.type.name}</div>))}</div></div>
          <div className = "modal-item"><div>Height:</div><div> {modalInfo && modalInfo.stats.height}</div></div>
          <div className = "modal-item"><div>Weight:</div><div> {modalInfo && modalInfo.stats.weight}</div></div>
          <div className = "modal-item"><div>Moves:</div> <div id = "moves-list">{modalInfo && modalInfo.stats.moves.map(current => (<div key = {current.move.name}>{current.move.name}</div>))}</div></div>
        </Modal>
      )}
    </>
  );
}

export default PokemonModal;
