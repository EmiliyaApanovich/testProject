import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectParamsScreen from '../screens/SelectParamsScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SelectParams" component={SelectParamsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
