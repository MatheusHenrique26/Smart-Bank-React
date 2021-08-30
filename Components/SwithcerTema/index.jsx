import React from 'react'
import TemaClaro from '../../assets/images/themeOn.svg'
import TemaEscuro from '../../assets/images/themeOff.svg'
import {Icone} from '../UI/index'

const claro =<Icone src={TemaClaro} alt='Tema claro'/>
const escuro = <Icone src={TemaEscuro} alt='Tema escuro' />

export default ({tema}) => (tema ? escuro : claro)