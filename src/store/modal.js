const SET_MODAL_INFO = "modal/SET_MODAL_INFO"
const TOGGLE_MODAL_VIEW = "modal/TOGGLE_MODAL_VIEW"

export const setModalInfo = (info) => {
    return {
        type:SET_MODAL_INFO,
        payload:info
    }
}

export const toggleModalView = (view) => {
    return {
        type:TOGGLE_MODAL_VIEW,
        payload:view
    }
}

let initialState = {modalView:false,modalInfo:null}
export default function modalReducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
      case SET_MODAL_INFO:
          newState.modalInfo = action.payload
          return newState
        case TOGGLE_MODAL_VIEW:
            newState.modalView = action.payload
            return newState
      default:
        return newState;
    }
  }
