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

export default class FriendsView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          image:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          username: 'Felix Swaghügler         ',
          size: '22.43 km',
        },
        {
          image: 'https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg',
          username: 'Monika Kosovan          ',
          size: '19.54 km',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/13/Daniel_Ingram_Profile.png',
          username: 'Roman Rahm               ',
          size: '14.32 km',
        },
        {
          image: 'https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg',
          username: 'Lisa Müller                    ',
          size: '12.04 km',
        },
        {
          image:
            'https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg',
          username: 'Kati Schönfeld                ',
          size: '9.08 km',
        },
        {
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
          username: 'Joshua Hardt                  ',
          size: '3.22 km',
        },
        {
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
          username: 'Luisa Schuhmann                ',
          size: '3.22 km',
        },
        {
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
          username: 'Joshua Hardt                  ',
          size: '3.22 km',
        },
      ]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Friends</Text>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity>
            <View style={styles.boxs}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />

              <Text style={styles.username}>Roman Daniel Rahm </Text>
              <Text style={styles.size}> 26.04 km</Text>
            </View>
          </TouchableOpacity>

          <ListView
            style={styles.container}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={user => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.image} source={{uri: user.image}} />
                    <Text style={styles.username}>{user.username}</Text>
                    <Text style={styles.size}>{user.size}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
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
    width: 60,
    height: 60,
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
    padding: 4,
    marginTop: 5,
    marginBottom: 2,
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
    padding: 2,
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
