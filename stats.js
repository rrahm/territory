import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ListView from 'deprecated-react-native-listview';

const yourPicture = require('./images/fitness.png');

export default class StatsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Statistics</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Image style={styles.image} source={yourPicture} />

          <TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.username}>Good Sleep!</Text>
              <Text style={styles.size}>+200</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.username}>Low Stresslevel!</Text>
              <Text style={styles.size}>+350</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <Text style={styles.username}>HIT-Training detected!</Text>
              <Text style={styles.size}>+400</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#313131',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 0,
  },
  image: {
    width: 390,
    height: 450,
    borderRadius: 13,
  },
  name: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#313131',
  },
  box: {
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 5,
    backgroundColor: '#A142E0',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    borderRadius: 10,
  },
  boxs: {
    padding: 5,
    marginTop: 5,
    marginBottom: 2,
    marginHorizontal: 5,

    backgroundColor: '#FD9205',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    borderRadius: 10,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  size: {
    marginRight: 2,
    color: '#313131',
    fontSize: 18,
    fontWeight: 'bold',

    alignSelf: 'center',
    marginLeft: 10,
  },
});
