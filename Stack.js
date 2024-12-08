import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddPlayers from './Componemts/AddPlayers';
import AddPlayerContextProvider from './store';
import GameDashBoard from './Componemts/gameDashBoard';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
 <AddPlayerContextProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Screw Calc'>
            <Stack.Screen name='addPlayer' component={AddPlayers} options={{
                headerBackButtonMenuEnabled: true,
                title:'Screw Calc',
                headerTitleAlign: 'center',
                
            }}/>
            <Stack.Screen name='gamedashboard' component={GameDashBoard} options={{
                // headerBackButtonMenuEnabled: true,
                title:'Screw Calc',
                headerTitleAlign: 'center',
                
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
 </AddPlayerContextProvider>
  );
}

export default MyStack;