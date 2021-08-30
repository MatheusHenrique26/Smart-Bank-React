import React from "react";
import alimentacao from "../../assets/images/alimentacao.svg";
import saude from "../../assets/images/saude.svg";
import transporte from "../../assets/images/transporte.svg";
import utilidades from "../../assets/images/utilidades.svg";
import outros from "../../assets/images/outros.svg";
import { IconeTema } from "../UI/index";

const imageFilter = (type) => {
  const Image = {
    Restaurante: <IconeTema  src={alimentacao} alt='restaurante' />,
    Saude: <IconeTema  src={saude} alt='saude' />,
    Transporte: <IconeTema  src={transporte} alt='transporte' />,
    Utilidades: <IconeTema  src={utilidades} alt='utilidade' />,
    Outros: <IconeTema  src={outros} alt='outros' />,
  };
  return Image[type] || Image.Outros;
};
export default imageFilter;
