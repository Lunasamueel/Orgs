import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Estrela from './estrela';


export default function Estrelas({ quantity: qtd, editable = false, bigger = false }) {

    const [quantity, setQuantity] = useState();

    const RenderEstrela = () => {
        const listaEstrela = [];
        for (let index = 0; index < 5; index++) {
            listaEstrela.push(<Estrela desabilitada={!editable} bigger={bigger}
                onPress={() => { setQuantity(index + 1) }}
                isFull={index < quantity} key={index} />)
        }

        return listaEstrela;
    }

    return <View style={styles.estrelas}>
        <RenderEstrela />
    </View>
}

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    }
})