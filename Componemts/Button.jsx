import { StyleSheet, Text, View } from 'react-native'
import { Button} from 'react-native-paper';

import React from 'react'

export default function ButtonCom({onpress,text}) {
  return (
    <Button style={styles.button} onPress={onpress}>
        <Text style={styles.text}>{text}</Text>
      </Button>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        borderWidth:1,
        borderRadius:5,

    },
    text:{
        fontSize: 20,
        color:'white',
    }
})