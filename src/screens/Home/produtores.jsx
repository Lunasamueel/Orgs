import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { carregaProdutores } from '../../servicos/carregaDados';
import Produtor from './produtor';

export default function Produtores({topo: Topo}) {


    const [lista, setLista] = useState([]);
    const [titulo, setTitulo] = useState('');

    useEffect(() => {
        const res = carregaProdutores();
        setLista(res.lista)
        setTitulo(res.titulo)
    });

    const topoLista = () => {
        return <>
            <Topo />
            <Text style={styles.title}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item }) => <Produtor {...item}/>}
        ListHeaderComponent={topoLista}
    />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        padding: 16
    }
})