import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from "../../assets/logo.png"
import { carregaTopo } from '../../servicos/carregaDados';

export default function Topo() {

    const [boasVindas, setBoasVindas] = useState();
    const [legenda, setLegenda] = useState();

    useEffect(() => {
        const res = carregaTopo()
        setBoasVindas(res.boasVindas);
        setLegenda(res.legenda);
    }, []);

    return <View style={styles.topo} >
        <Image style={styles.image} source={logo} />
        <Text style={styles.title} >{boasVindas}</Text>
        <Text style={styles.description} >{legenda}</Text>
    </View>
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16
    },
    image: {
        width: 70,
        height: 28,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 48,
        marginTop: 28,
        color: "#464646"
    },
    description: {
        lineHeight: 28,
        fontSize: 16,
        color: "#a3a3a3"
    }
}) 