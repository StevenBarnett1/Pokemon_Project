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
          <div id = "name" className = "modal-item">{modalInfo && modalInfo.name[0].toUpperCase() + modalInfo.name.slice(1)}</div>
          <div id = "attributes">
            <div id = "left">
                <div className = "modal-item-label">Types:</div>
                <div className = "modal-item-label">Height:</div>
                <div className = "modal-item-label">Weight:</div>
            </div>
            <div id = "right">
                <div className = "mapped-types item-result"> {modalInfo && modalInfo.stats.types.map((current,i) => (<div key = {current.type.name}>{current.type.name}{i !== modalInfo.stats.types.length-1 ? "/" : ""}</div>))}</div>
                <div className = "item-result"> {modalInfo && modalInfo.stats.height}</div>
                <div className = "item-result"> {modalInfo && modalInfo.stats.weight}</div>
            </div>
          </div>
          <div id = "move-list" className = "modal-item"><div id = "move-list-title" className = "modal-item-label">Move List</div> <div id = "moves-list">{modalInfo && modalInfo.stats.moves.map(current => (<div key = {current.move.name}>{current.move.name}</div>))}</div></div>
        </Modal>
      )}
    </>
  );
}

export default PokemonModal;
