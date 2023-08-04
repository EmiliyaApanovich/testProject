import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Dropdown from '../assets/dropdown.svg';
import CalendarSVG from '../assets/calendar.svg';
import {Calendar} from 'react-native-calendars';
import {CamerasArray, monthNames} from '../types';
import {useGetImages} from '../hooks';
import LoadingScreen from '../components/LoadingScreen';

const SelectParamsScreen = () => {
  const [selectedCameraName, setSelectedCameraName] = useState(CamerasArray[0]);
  const [date, setDate] = useState(new Date());
  const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);
  const [isVisibleCamera, setIsVisibleCamera] = useState(false);
  const {error, images, isLoading, mutate} = useGetImages();
  return (
    <ImageBackground
      source={require('../assets/selectParamsBackground.png')}
      resizeMode="stretch"
      style={styles.container}>
      <Text style={styles.textOfTitle}>Select Camera and Date</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.nameOfGettingCamera}>Rover camera</Text>
        <TouchableOpacity
          style={styles.dateContainer}
          onPress={() => {
            setIsVisibleCamera(true);
          }}>
          <Text style={styles.textOfGettingInfo}>
            {selectedCameraName.fullName}
          </Text>
          <View style={styles.flex} />
          <Dropdown />
        </TouchableOpacity>
        <Text style={styles.textOfGettingCameras}>Rover camera</Text>
        <TouchableOpacity
          style={styles.dateContainer}
          onPress={() => setIsVisibleCalendar(true)}>
          <Text style={styles.textOfGettingInfo}>
            {`${date.getDate()} ${
              monthNames[date.getMonth()]
            }, ${date.getFullYear()}`}
          </Text>
          <View style={styles.flex} />
          <CalendarSVG />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.exploreContainer}
          onPress={() =>
            mutate({
              date: date.toISOString().substring(0, 10),
              roverCamera: selectedCameraName.shortName,
            })
          }>
          <Text style={styles.text}>Explore</Text>
        </TouchableOpacity>
      </View>
      {isVisibleCalendar && (
        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            maxDate={Date()}
            markedDates={{
              [date.toISOString().substring(0, 10)]: {
                selected: true,
                selectedColor: '#ca8575',
              },
            }}
            onDayPress={value => {
              setDate(new Date(value.dateString));
            }}
          />
          <TouchableOpacity
            onPress={() => setIsVisibleCalendar(false)}
            style={styles.calendarField}>
            <Text style={styles.text}>Set date</Text>
          </TouchableOpacity>
        </View>
      )}
      {isVisibleCamera && (
        <View style={styles.cameraContainer}>
          <FlatList
            style={styles.list}
            data={CamerasArray}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.cameraField}
                onPress={() => {
                  setSelectedCameraName(item);
                  setIsVisibleCamera(false);
                }}>
                <Text style={styles.textCameraField}>{item.fullName}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textCameraField: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  textOfGettingInfo: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  cameraField: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  calendarField: {
    backgroundColor: '#ca8575',
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  list: {
    width: '100%',
    marginTop: '90%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#a39a98',
  },
  cameraContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000ac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000ac',
    justifyContent: 'center',
  },
  exploreContainer: {
    backgroundColor: '#BF2E0E',
    borderRadius: 10,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  dateContainer: {
    backgroundColor: '#ffffffad',
    borderRadius: 10,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
  },
  textOfGettingCameras: {
    color: 'black',
    marginTop: 16,
    marginBottom: 7,
    fontSize: 14,
    fontWeight: '400',
  },
  nameOfGettingCamera: {
    color: 'black',
    marginBottom: 7,
    fontSize: 14,
    fontWeight: '400',
  },
  calendar: {width: '100%', borderRadius: 8},
  flex: {
    flex: 1,
  },
  container: {flex: 1, alignItems: 'center'},
  textOfTitle: {fontSize: 18, marginTop: 42, color: 'black'},
  inputContainer: {
    marginTop: 167,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default SelectParamsScreen;
