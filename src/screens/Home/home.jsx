import React from 'react';
import { Text } from 'react-native';
import Topo from './topo';
import Produtores from './produtores';


export default function Home(){
  return <>
        {/* <Topo /> */}
        <Produtores topo={Topo} />
  </>
}