import { StyleSheet, Text,   View } from 'react-native'

import {TextInput} from 'react-native-paper'
import React from 'react'

export default function TextInputCom({label,onchange}) {
   
 
  return (
  <TextInput label={label} style={styles.input} onChangeText={onchange} />
  )
}

const styles = StyleSheet.create({
    input:{
        margin:10,
        borderColor: "gray",
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
      },
})