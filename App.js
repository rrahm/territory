/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Image,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import Map from './Map';
import Friends from './Friendslist';
import StatsView from './stats.js';

const App: () => React$Node = () => {
  //let data = fetch('http://localhost:5000/api');
  //console.log(data);

  // async function getData() {
  //   try {
  //     let response = await fetch('http://localhost:5000/api');
  //     let json = await response.json();
  //     console.log(json);

  //     return json;
  //   } catch (error) {
  //     console.log('erareasds');

  //     console.error(error);
  //   }
  // }
  // console.log('sdaasdds');
  // getData();
  return (
    <Swiper loop={false} showsPagination={false} index={1}>
      <StatsView />
      <Swiper horizontal={false} loop={false} showsPagination={false} index={1}>
        <View style={styles.Screen}>
          <Text style={styles.sectionTitle}> Settings</Text>
        </View>

        <Map />

        <View style={styles.Screen}>
          <Text style={styles.sectionTitle}> Store</Text>
        </View>
      </Swiper>
      <Friends />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  myButton: {
    padding: 5,
    height: 200,
    width: 200, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'rgb(195, 125, 198)',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  Screen: {
    flex: 1,
    backgroundColor: '#313131',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
