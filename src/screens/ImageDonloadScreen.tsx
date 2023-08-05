import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Back from '../assets/back.svg';
import Share from '../assets/share.svg';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationProps} from '../navigation/route';
import FastImage from 'react-native-fast-image';

const ImageDonloadScreen = () => {
  const props = useRoute<RouteProp<NavigationProps>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationProps>>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Back stroke={'#ffff'} />
          </TouchableOpacity>
          <View style={styles.flex} />
          <View style={styles.textView}>
            <Text style={styles.cameraNameText}>Photo ID</Text>
            <Text style={styles.dateText}>{props.params.id}</Text>
          </View>
          <View style={styles.flex} />
          <TouchableOpacity style={styles.backButton}>
            <Share stroke={'#ffff'} />
          </TouchableOpacity>
        </View>
        <View style={[styles.fastImageView]}>
          <FastImage
            // resizeMode="cover"
            style={styles.fastImage}
            source={{uri: props.params?.url}}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  fastImage: {borderRadius: 8, flex: 1},
  fastImageView: {
    padding: 16,
    flex: 1,
    paddingBottom: 0,
  },
  listView: {
    marginTop: 16,
    alignItems: 'center',
  },
  flex: {flex: 1},
  dateText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
  cameraNameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  textView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {flex: 1, backgroundColor: 'black', paddingBottom: 34},
  textBox: {
    marginTop: 42,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default ImageDonloadScreen;
