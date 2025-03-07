import React, { useEffect, useState } from 'react';
import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {

    const [lista, setLista] = useState([]);
    const [titulo, setTitulo] = useState('');

    useEffect(() => {
        const res = carregaProdutores();
        setLista(res.lista)
        setTitulo(res.titulo)
    }, []);

    return [titulo, lista];
}