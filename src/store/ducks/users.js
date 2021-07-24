import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  newUser: ["name", "birth_date"],
  inputTextName: ["name"],
  inputTextDate: ["birth_date"],
  setModalStatus: ["status"],
});

const INITIAL_STATE = {
  $id: 0,
  data: [],
  inputTextName: "",
  inputTextDate: "",
  modalStatus: false,
};

export default createReducer(INITIAL_STATE, {
  [Types.NEW_USER]: (state = INITIAL_STATE, action) => ({
    ...state,
    $id: state.$id + 1,
    data: [
      {
        id: state.$id + 1,
        name: action.name,
        birth_date: action.birth_date,
      },
      ...state.data,
    ],
    inputTextName: "",
    inputTextDate: "",
    modalStatus: false,
  }),

  [Types.INPUT_TEXT_NAME]: (state, action) => ({
    ...state,
    inputTextName: action.name,
  }),

  [Types.INPUT_TEXT_DATE]: (state, action) => ({
    ...state,
    inputTextDate: action.birth_date,
  }),

  [Types.SET_MODAL_STATUS]: (state, action) => ({
    ...state,
    modalStatus: action.status,
  }),
});
