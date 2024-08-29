//In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const {itemID, otherParams} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>Item id: {JSON.stringify(itemID)}</Text>
      <Text>otherParams: {JSON.stringify(otherParams)}</Text>
      <View style={{marginVertical: 20}}>
        <Button  title="Go to Details again..." onPress={() => navigation.setParams(
         { itemID: Math.floor(Math.random()*100) }
        )} />
      </View>
      <Button title="Go back (Pop to Top)" onPress={() => navigation.popToTop()}/>
      {/* <Button title="Go to Details again" onPress={() => navigation.push('Details')}/> */}
      {/* <Button title="Go to Home" onPress={() => navigation.push('Home')}/> */}
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          option= {{title: "Overview"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemID:0, otherParams:"Default"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;