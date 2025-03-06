import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import estrela from "../../assets/estrela.png";
import estrelaCInza from "../../assets/estrelaCinza.png";


export default function Estrela({isFull, onPress, desabilitada, bigger }) {

    const getImage = () => {
        if(isFull){
            return estrela;
        }
        return estrelaCInza
    }

    const styles = stylesFunction(bigger)

    return <TouchableOpacity onPress={onPress} disabled={desabilitada} >
        <Image style={styles.star} source={getImage()}  />
    </TouchableOpacity>
}

const stylesFunction = (bigger) => StyleSheet.create({
    star: {
        width: bigger? 36 : 12,
        height: bigger? 36: 12,
    }
});