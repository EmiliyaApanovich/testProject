import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetImages} from '../hooks';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigation/route';
import Back from '../assets/back.svg';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageFromRequest, monthNames} from '../types';

const ImageListScreen = () => {
  const props = useRoute<RouteProp<NavigationProps>>();
  const {increase, mutate, page, images, error} = useGetImages();
  const [allImages, setAllImages] = useState<ImageFromRequest[]>(
    props.params?.images,
  );
  useEffect(() => {
    if (error !== null) {
      Alert.alert('Request faild');
    }
  }, [error]);
  const windowWidth = 0.3 * Dimensions.get('window').width;
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationProps>>();
  useEffect(() => {
    if (page !== 1) {
      mutate({
        date: props.params?.dateString.toISOString().substring(0, 10)!,
        page: page,
        roverCamera: props.params?.shortCameraName!,
      });
    }
  }, [page]);

  useEffect(() => {
    if (images !== null) {
      setAllImages([...allImages!, ...images!]);
    }
  }, [images]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.textBox}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Back />
          </TouchableOpacity>
          <View style={styles.flex} />
          <View style={styles.textView}>
            <Text style={styles.cameraNameText}>
              {props.params?.cameraName}
            </Text>
            <Text style={styles.dateText}>
              {`${props.params?.dateString.getDate()} ${
                monthNames[props.params!.dateString.getMonth()]
              }, ${props.params!.dateString.getFullYear()}`}
            </Text>
          </View>
          <View style={styles.flex} />
        </View>
        <View style={styles.listView}>
          {allImages[0] !== undefined ? (
            <FlatList
              data={allImages}
              numColumns={3}
              onEndReached={increase}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ImageDonload', {
                        id: item.id.toString(),
                        url: item.img_src,
                      });
                    }}>
                    <View
                      style={[
                        styles.fastImageView,
                        {width: windowWidth, height: windowWidth},
                      ]}>
                      <FastImage
                        style={styles.fastImage}
                        source={{uri: item.img_src}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <Text style={styles.emptyArrayText}>No photos in this day</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyArrayText: {fontSize: 24, marginTop: '70%'},
  fastImage: {borderRadius: 8, flex: 1},
  fastImageView: {
    padding: 8,
  },
  listView: {
    marginTop: 16,
    alignItems: 'center',
  },
  flex: {flex: 1},
  dateText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
  },
  cameraNameText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  textView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 45,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {flex: 1, backgroundColor: '#DCCEBE', paddingBottom: 85},
  textBox: {
    marginTop: 42,
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ImageListScreen;
