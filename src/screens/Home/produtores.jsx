import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Produtor from './produtor';
import useProdutores from '../../hooks/useProdutores';

export default function Produtores({topo: Topo}) {

    const [titulo, lista] = useProdutores([]);

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