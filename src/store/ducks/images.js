import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  newImage: ["url", "user_id"],
  inputUrl: ["url"],
  inputUser: ["user_id"],
  setModalStatus: ["status"],
});

const INITIAL_STATE = {
  $id: 0,
  data: [],
  inputUrl: "",
  inputUser: "",
  modalStatusImagens: false,
};

export default createReducer(INITIAL_STATE, {
  [Types.NEW_IMAGE]: (state, action) => ({
    ...state,
    $id: state.$id + 1,
    data: [
      {
        id: state.$id + 1,
        url: action.url,
        user_id: action.user_id,
      },
      ...state.data,
    ],
    inputUrl: "",
    inputUser: "",
    modalStatusImagens: false,
  }),

  [Types.INPUT_URL]: (state, action) => ({
    ...state,
    inputUrl: action.url,
  }),

  [Types.INPUT_USER]: (state, action) => ({
    ...state,
    inputUser: action.user_id,
  }),

  [Types.SET_MODAL_STATUS]: (state, action) => ({
    ...state,
    modalStatusImagens: action.status,
  }),
});
