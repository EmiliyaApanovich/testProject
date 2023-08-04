/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MyStack from './src/navigation/route';

function App(): JSX.Element {
  // const {error, images, isLoading, mutate} = useGetImages({
  //   date: '2015-6-3',
  //   roverCamera: 'FHAZ',
  // });
  // useEffect(() => {
  //   mutate();
  // }, []);
  // console.log(images[0]);
  return <MyStack />;
}

export default App;
