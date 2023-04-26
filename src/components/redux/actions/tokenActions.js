import {
  SOLICITAR_TOKEN,
  SOLICITAR_TOKEN_EXITO,
  SOLICITAR_TOKEN_ERROR,
  ELIMINAR_TOKEN,
} from "../types";

export function iniciarSolicitarToken(usuario, contraseña) {
  let token = usuario + contraseña;
  return async (dispatch) => {
    console.log("ingreso al action", usuario, contraseña);
    dispatch(solicitaToken());

    try {
      await dispatch(solicitarTokenExito(token));
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      dispatch(solicitarTokenError(true));
    }
  };
}

export function iniciarEliminarToken() {
  console.log("llego al action de eliminar token");

  return async (dispatch) => {
    console.log("entro al dispatch");
    dispatch(solicitaEliminarToken());
  };
}

const solicitaEliminarToken = () => ({
  type: ELIMINAR_TOKEN,
});

const solicitaToken = () => ({
  type: SOLICITAR_TOKEN,
});

const solicitarTokenExito = (token) => ({
  type: SOLICITAR_TOKEN_EXITO,
  payload: token,
});

const solicitarTokenError = () => ({
  type: SOLICITAR_TOKEN_ERROR,
});
