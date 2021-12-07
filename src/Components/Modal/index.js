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
          <div id = "name" className = "modal-item">{modalInfo && modalInfo.name}</div>
          <div className = "modal-item"><div>Types:</div><div className = "mapped-types item-result"> {modalInfo && modalInfo.stats.types.map((current,i) => (<div key = {current.type.name}>{current.type.name}{i !== modalInfo.stats.types.length-1 ? "/" : ""}</div>))}</div></div>
          <div className = "modal-item"><div>Height:</div> <div className = "item-result"> {modalInfo && modalInfo.stats.height}</div></div>
          <div className = "modal-item"><div>Weight:</div> <div className = "item-result"> {modalInfo && modalInfo.stats.weight}</div></div>
          <div id = "move-list" className = "modal-item"><div id = "move-list-title">Move List</div> <div id = "moves-list">{modalInfo && modalInfo.stats.moves.map(current => (<div key = {current.move.name}>{current.move.name}</div>))}</div></div>
        </Modal>
      )}
    </>
  );
}

export default PokemonModal;
