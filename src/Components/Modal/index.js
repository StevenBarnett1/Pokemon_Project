import { Modal } from '../../context/Modal';
import {useState, useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"

// import {ImCross} from "react-icons/im"
// import {AiOutlinePlus} from "react-icons/ai"
// import {GrCheckmark} from "react-icons/gr"
import "./Modal.css"
function FormModal(props) {
  const dispatch = useDispatch()

  const modalView = useSelector(state => state.session.modalView)
  const modalInfo = useSelector(state => state.session.modalInfo)
  const theme = useSelector(state=> state.session.theme)




  const handleOnModalClose = () => {
    dispatch(toggleModalView(false))
  }


  return (
    <>
      {modalView && (
        <Modal onClose={() => handleOnModalClose()}>
          {modal}
        </Modal>
      )}
    </>
  );
}

export default FormModal;
