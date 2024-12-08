import { View, Text, SafeAreaView ,StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { addPlayerContext } from '../store'
import { Button, Dialog, Portal, PaperProvider} from 'react-native-paper';
import ButtonCom from './Button'
import {DataTable} from 'react-native-paper'
import TextInputCom from './TextInputCom';
const GameDashBoard = () => {
  const [visible, setVisible] = useState(false);
  const { players,setPlayers} = useContext(addPlayerContext)
  const [points,setPoints]=useState([])
  const [pointsStr,setPointsStr]=useState('')
  
  const hideDialog = () => setVisible(false);
  const showDialog = () => {
    setVisible(true)
  };
//   const AddGame=() =>{
// console.log(`<DataTable.Row>
//   {${players}.map((player,ind) => <DataTable.Title key={player.id} style={{
//     borderWidth :2,
//     padding :5,
//     borderRadius:5
//   }}>
//     <Text style={{
//       fontSize:25,
//       fontWeight : 'bold',
//       color:'black'
//     }}>
//       {player.name}
//     </Text>
//     </DataTable.Title>)}
//   </DataTable.Row>`)
  
//   }

const onchange=(e)=>{
  console.log(e)  
  // setPointsStr(e)
  // // setPoints([...points,pointsStr])
  // setPoints([...points,pointsStr])
}
// const addPoints=()=>{
//   console.log(pointsStr)
//   setVisible(false)
//   console.log(points)

// }
  return (
<PaperProvider>
<ScrollView>
    <SafeAreaView >
   <ScrollView horizontal={true}>
  <DataTable >
   <DataTable.Header>
      {players.map((player,ind) => <DataTable.Title key={player.id} style={{
        borderWidth :1,
        // padding :3,
        borderRadius:1,
        width:150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{
        fontSize:25,
        fontWeight : 'bold',
        color:'black'
      }}>
        {player.name}
      </Text>
      </DataTable.Title>)} 
    </DataTable.Header>
    {/* {rowCount.map((e,ind)=><View key={ind}>{e}</View>)} */}
  </DataTable>
        </ScrollView>
    <ButtonCom text={"Add game"} onpress={players.map(player=><TextInputCom/>)}/>
   </SafeAreaView>
   </ScrollView>
   {/* <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Add Game</Dialog.Title>
                <ScrollView>
            <Dialog.Content>
                {players?.map(player=><TextInputCom key={player.id} label={player.name} onchange={onchange} />)}
            </Dialog.Content>
                </ScrollView>
            <Dialog.Actions>
             
              <Button onPress={hideDialog} >Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
</PaperProvider>
  )
}

export default GameDashBoard

const styles = StyleSheet.create({
  container: {  backgroundColor:'red',
    flexDirection:'column',
    width:'100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: {
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold'
  },
 

});