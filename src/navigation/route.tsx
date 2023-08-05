import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectParamsScreen from '../screens/SelectParamsScreen';
import ImageListScreen from '../screens/ImageListScreen';
import {ImageFromRequest} from '../types';
import ImageDonloadScreen from '../screens/ImageDonloadScreen';
export type NavigationProps = {
  SelectParams: undefined;
  ImageDonload: {
    id: string;
    url: string;
  };
  ImageList: {
    images: ImageFromRequest[];
    dateString: Date;
    cameraName: string;
    shortCameraName: string;
  };
};
const Stack = createNativeStackNavigator<NavigationProps>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SelectParams" component={SelectParamsScreen} />
        <Stack.Screen name="ImageList" component={ImageListScreen} />
        <Stack.Screen name="ImageDonload" component={ImageDonloadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
