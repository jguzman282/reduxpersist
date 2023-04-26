import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@chakra-ui/react";
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

  const token = useSelector((state) => state.token.token);
  console.log("valor del token", token);

  return (
    <>
      {token.length > 0 ? (
        <>
          <Box bg="green.300"> Este es el token: {token[0]}</Box>
          <Button
            colorScheme="red"
            onClick={() => {
              solicitarEliminarToken();
            }}
          >
            Cerrar sesion
          </Button>
        </>
      ) : (
        <Button
          colorScheme="green"
          onClick={() => {
            solicitarToken();
          }}
        >
          Iniciar sesionr
        </Button>
      )}

      {token.length > 0 ? <p>log</p> : <p>no log</p>}
    </>
  );
};

export default Header;
