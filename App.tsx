import React from "react";
import SignUp from "./Components/Pages/SignUp/SignUp";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "./Components/Pages/SignIn/SignIn";

const Stack = createNativeStackNavigator();



function App(){
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: true,    
            headerTitle: null,
          }}/>

        <Stack.Screen 
        name="SignUp" 
        component={SignUp} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;
