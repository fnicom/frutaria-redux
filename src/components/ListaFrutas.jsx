import React from 'react';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta';
import { useSelector } from 'react-redux';

const ListaFrutas = () => {

    const frutas = useSelector(state => state.frutaReducers.frutas)

  return (
    <>
    <h1>LIsta de Frutas</h1>

    <AdicionaFruta/>

    {frutas.map(fruta => (
        <Fruta key={fruta.id} fruta={fruta}/>
    ))}
    </>
  )
}

export default ListaFrutas