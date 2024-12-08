import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Icon } from 'react-native-vector-icons/icon'
import { AntDesign } from '@expo/vector-icons'; 
export default function PlayerRow({text,deletePlayer,editPlayer,index,id }) {
  return (
    <View style={styles.view}>
        <Text style={{
        fontSize:20,
        fontWeight: 'bold'
      }} >{index}</Text>
      <Text style={{
        fontSize:25,
        fontWeight: 'bold'
      }}>{text}</Text>
      <View style={styles.icons}>
      <AntDesign onPress={deletePlayer} name="delete" size={25} color="red" />
      <AntDesign onPress={editPlayer} name="edit" size={25} color="green" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view :{
        flexDirection:'row',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:3,
        margin :5,
        height: 45,
        borderColor: "black",
        borderWidth: 1,
        borderRadius:5,
        width : "100%"
        },
        icons:{
            flexDirection:'row',
            gap:15,
        }
})