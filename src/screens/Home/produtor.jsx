import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Estrelas from './estrelas';


export default function Produtor({ nome, imagem, distancia, estrelas }) {

    const [selected, setSelected] = useState(false);

    return <TouchableOpacity style={styles.card} onPress={() => setSelected(!selected)}>
        <Image style={styles.image} source={imagem} />
        <View style={styles.info}>
            <View>
                <Text style={styles.name}>{nome}</Text>
                <Estrelas quantity={estrelas} editable={selected} bigger={selected}/>
            </View>
            <Text style={styles.distance}>{distancia}</Text>
        </View>

    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f6f6f6",
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 4,
        borderRadius: 8
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
})