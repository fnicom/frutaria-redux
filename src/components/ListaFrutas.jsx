import React from 'react';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta'

const ListaFrutas = () => {

    const frutas = [
        { id: 1, nome: 'Abacaxi', quatidade: 5 },
        { id: 2, nome: 'Uva', quantidade: 12 }
    ]

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