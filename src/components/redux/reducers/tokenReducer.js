import {
  SOLICITAR_TOKEN,
  SOLICITAR_TOKEN_EXITO,
  SOLICITAR_TOKEN_ERROR,
  ELIMINAR_TOKEN,
  ELIMINAR_TOKEN_EXITO,
  ELIMINAR_TOKEN_ERROR,
} from "../types";

const initialState = {
  token: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SOLICITAR_TOKEN:
      return {
        ...state,
        loading: true,
      };

    case SOLICITAR_TOKEN_EXITO:
      return {
        ...state,
        loading: false,
        token: [...state.token, action.payload],
      };

    case SOLICITAR_TOKEN_ERROR:
      return {
        error: true,
      };
    case ELIMINAR_TOKEN:
      return {
        token: [],
      };

    default:
      return state;
  }
}
