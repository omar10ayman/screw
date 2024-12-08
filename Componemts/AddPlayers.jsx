import { ScrollView, StatusBar, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { addPlayerContext } from '../store'
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PlayerRow from './PlayerRow';
import ButtonCom from './Button';

const AddPlayers = ({navigation }) => {
    const [visible, setVisible] = useState(false);
    const [editClick, setEditClick] = useState(false);
    const [namePlayer, setName] = useState('');
    const [idPLAYER, setId] = useState(0);
    const { players,setPlayers } = useContext(addPlayerContext)
   
    const showDialog = () => {
      setVisible(true)
      setEditClick(false)
    };

  const hideDialog = () => setVisible(false);
  const goToGame =()=>{
    navigation.navigate('gamedashboard')
  }
useEffect(()=>{
  getPlayers()
  // removePlayerFun()
},[])

// console.log(players)
const deletePlayer = (id) =>{
  const deletePlayerFilter=players?.filter(e => e.id !==id)
  setPlayers([...deletePlayerFilter])
  setPlayerFun([...deletePlayerFilter])
  console.log(deletePlayerFilter)
}
const editPlayer = (id) =>{
  setVisible(true);
  setEditClick(true)
  setId(id)
}
const  editPlayerSumbit= ()=>{
  setVisible(false)
  let edit =players?.find(e=>e.id == idPLAYER)
  edit.name= namePlayer
  console.log(edit.name)
  setPlayers([...players])
  setPlayerFun([...players])
}

const onChangeTextInput=(e)=>{
  setName(e)
  // console.log(e)
}
    const removePlayerFun = async () =>{
      try {
        await AsyncStorage.removeItem('players')

      }catch(e){
        console.error(e)
      }
    }
    const setPlayerFun = async (players) =>{
      try {
        await AsyncStorage.setItem('players', JSON.stringify(players))

      }catch(e){
        console.error(e)
      }
    }
    const getPlayers = async () =>{
      try{
        let getPlayer= await AsyncStorage.getItem('players')
        getPlayer= JSON.parse(getPlayer)
      if(getPlayer !== null){
        
        setPlayers([...getPlayer])
      }
      }catch(e){
        console.log(e)
      }
    
    }
    const addPlayerSumbit= ()=>{
      if(namePlayer){
        let player={
          name:namePlayer,
          score:0,
          totalScore:0,
          id:Math.floor(Math.random()*10000)
      }
      setVisible(false)
      setPlayers([...players,player])
      setPlayerFun([...players,player])
      }
    }
    
  return (
  <PaperProvider>
      <ScrollView>
      <View style={styles.view}>
      <View style={styles.arrayStyle}>
      {players.length===0 ?
        <Text >
            No Players Added
        </Text>
      :
           <View >
            { players?.map((player,index)=><PlayerRow key={player.id} text={player.name}  index={index+1} deletePlayer={()=>deletePlayer(player.id)} editPlayer={()=>editPlayer(player.id)}/>)}
            </View>}
      </View>
       <View style={{
        borderBlockColor:"red",
        flex :1 ,
        flexDirection: "row"
       }}>
     <ButtonCom onpress={showDialog} text={"Add Player"} />
      {players?.length>=4 && <ButtonCom onpress={goToGame} text={"Go To Game"}/>}
       </View>
      <Portal>
          <Dialog visible={visible} onDismiss={editClick? editPlayerSumbit: addPlayerSumbit}>
            <Dialog.Title>Add Player </Dialog.Title>
            <Dialog.Content>
                <TextInput style={styles.input} onChangeText={onChangeTextInput} ></TextInput>
            </Dialog.Content>
            <Dialog.Actions>
              {editClick ?<Button onPress={editPlayerSumbit}>Edit</Button>:<Button onPress={addPlayerSumbit}>Done</Button>}
              <Button onPress={hideDialog} >Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
       
    </View>
      </ScrollView>
  </PaperProvider>
  )
}

export default AddPlayers

const styles = StyleSheet.create({
    view:{
      // flex:1,
      // display: 'flex',
      flexDirection: 'column',
      padding:20,
      // width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // fontSize:10  
    },
    input:{
      borderColor: "gray",
      borderRadius: 5,
      padding: 10,
      borderWidth: 1,
    },
    arrayStyle :{
      flex:3,
      // backgroundColor:"green",
      width: '100%',
      display : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
})
