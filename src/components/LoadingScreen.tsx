import {Text, ImageBackground} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';

const LoadingScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/backgroundImage.png')}
      resizeMode="stretch"
      style={{flex: 1}}>
      <LinearTextGradient
        style={{
          flexDirection: 'column',
          width: '75%',
          marginTop: 42,
          marginLeft: 18,
        }}
        locations={[0, 1]}
        colors={['#FFFFFF', '#3A1707']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.3}}>
        <Text style={{fontSize: 90, fontWeight: '300'}}>MARS </Text>
        <Text style={{fontSize: 24, fontWeight: '600'}}>by Curiosity</Text>
      </LinearTextGradient>
    </ImageBackground>
  );
};

export default LoadingScreen;
