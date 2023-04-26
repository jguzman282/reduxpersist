import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import {
  iniciarEliminarToken,
  iniciarSolicitarToken,
} from "../redux/actions/tokenActions";
const Header = () => {
  let usuario = "jguzman";
  let contraseña = "123456";
  const dispatch = useDispatch();
  const pedirToken = () => dispatch(iniciarSolicitarToken(usuario, contraseña));
  const pedirEliminarToken = () => dispatch(iniciarEliminarToken());
  const solicitarToken = () => {
    pedirToken();
  };
  const solicitarEliminarToken = () => {
    console.log("pido eliminar");
    pedirEliminarToken();
  };

  const token = useSelector((state) => state.token);
  console.log("valor del token", token);

  return (
    <>
      <Button
        onClick={() => {
          solicitarToken();
        }}
      >
        Iniciar sesion
      </Button>

      <Button
        onClick={() => {
          solicitarEliminarToken();
        }}
      >
        Cerrar sesion
      </Button>
    </>
  );
};

export default Header;
