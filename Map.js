import React, {Component} from 'react';
import {
  View,
  Image,
  Colors,
  Button,
  Permissions,
  TouchableOpacity,
  Text,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Polyline,
  Callout,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import Geolocation from '@react-native-community/geolocation';

import Tracking from './Tracking';

const yourPicture = require('./images/otow.png');
const yourPicturep = require('./images/ptow.png');
const yourPicture2 = require('./images/tree.png');
const yourPicture3 = require('./images/large.png');
const yourPictureu = require('./images/user.png');

var coordinates = [
  {latitude: 48.209238, longitude: 11.542533},
  {latitude: 48.208964, longitude: 11.544816},
  {latitude: 48.207385, longitude: 11.546071},
  {latitude: 48.206274, longitude: 11.546168},
  {latitude: 48.204379, longitude: 11.546518},
  {latitude: 48.205075, longitude: 11.543509},
  {latitude: 48.200783, longitude: 11.543568},
  {latitude: 48.200638, longitude: 11.54312},
  {latitude: 48.202746, longitude: 11.540316},
  {latitude: 48.203804, longitude: 11.539254},
  {latitude: 48.204427, longitude: 11.537885},
  {latitude: 48.206913, longitude: 11.534541},
  {latitude: 48.207653, longitude: 11.533351},
  {latitude: 48.20894, longitude: 11.532689},
  {latitude: 48.211902, longitude: 11.530006},
  {latitude: 48.212853, longitude: 11.529885},
  {latitude: 48.215196, longitude: 11.530622},
  {latitude: 48.214646, longitude: 11.5344},
  {latitude: 48.212128, longitude: 11.536995},
  {latitude: 48.210417, longitude: 11.538977},
  {latitude: 48.208715, longitude: 11.540441},
  {latitude: 48.208511, longitude: 11.540959},
  {latitude: 48.207536, longitude: 11.541611},
  {latitude: 48.207633, longitude: 11.54209},
];

function renderRandomMarkers(n) {
  const {latitude, longitude, latitudeDelta, longitudeDelta} = initialRegion;
  return new Array(n).fill().map((x, i) => (
    <Marker
      key={i}
      coordinate={{
        latitude: latitude + (Math.random() - 0.5) * latitudeDelta * 3,
        longitude: longitude + (Math.random() - 0.5) * longitudeDelta * 6,
      }}>
      <Image style={styles.tinyLogo2} source={yourPicture2} />
    </Marker>
  ));
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  myButton: {
    height: 80,
    width: 80, //The Width must be the same as the height
    borderRadius: 50, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'rgb(195, 125, 198)',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  tinyLogo: {
    width: 27,
    height: 35,
  },
  tinyLogo2: {
    width: 50,
    height: 50,
  },
  tinyLogo3: {
    width: 100,
    height: 100,
  },
  body: {
    backgroundColor: '#313131',
  },
  box: {
    padding: 10,
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
  header: {
    backgroundColor: '#20B2AA',
    height: 30,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 33,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 3,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 26,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  img: {
    width: 58,
    height: 58,
    alignSelf: 'center',
  },
  own_line: {
    width: 58,
    height: 58,
    alignSelf: 'center',
  },
});

const initialRegion = {
  latitude: 48.209104162066936,
  longitude: 11.539351885737226,
  latitudeDelta: 0.02,
  longitudeDelta: 0.0121,
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 48.209104162066936,
      longitude: 11.539351885737226,
      coordinates: {
        latitude: 48.209104162066936,
        longitude: 11.539351885737226,
      },
    };
  }

  MapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.business',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];

  /*async fetchInitialRoute() {
    const startLoc = "23.1 , 23.4 "
    const endLoc = "25.1, 25.3"
    try {
        const resp = await fetch('htt')
    }
    catch(error) {
  
    }
  
  }
  */
  render() {
    Geolocation.getCurrentPosition(info => console.log(info));

    return (
      <View style={styles.container}>
        <MapView
          showsBuildings
          ref={ref => {
            this.map = ref;
          }}
          onLayout={() => {
            this.map.animateToBearing(125);
            this.map.animateToViewingAngle(55);
          }}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          customMapStyle={this.MapStyle}
          //mapType="hybrid"
          showsUserLocation={true}
          followUserLocation={true}
          initialRegion={{
            latitude: 48.209104162066936,
            longitude: 11.539351885737226,
            latitudeDelta: 0.001,
            longitudeDelta: 0.0121,
          }}>
          {renderRandomMarkers(22)}

          <MapView.Polygon
            coordinates={[
              {latitude: 48.209238, longitude: 11.542533},
              {latitude: 48.208964, longitude: 11.544816},
              {latitude: 48.207385, longitude: 11.546071},
              {latitude: 48.206274, longitude: 11.546168},
              {latitude: 48.204379, longitude: 11.546518},
              {latitude: 48.205075, longitude: 11.543509},
              {latitude: 48.200783, longitude: 11.543568},
              {latitude: 48.200638, longitude: 11.54312},
              {latitude: 48.202746, longitude: 11.540316},
              {latitude: 48.203804, longitude: 11.539254},
              {latitude: 48.204427, longitude: 11.537885},
              {latitude: 48.206913, longitude: 11.534541},
              {latitude: 48.207653, longitude: 11.533351},
              {latitude: 48.20894, longitude: 11.532689},
              {latitude: 48.211902, longitude: 11.530006},
              {latitude: 48.212853, longitude: 11.529885},
              {latitude: 48.215196, longitude: 11.530622},
              {latitude: 48.214646, longitude: 11.5344},
              {latitude: 48.212128, longitude: 11.536995},
              {latitude: 48.210417, longitude: 11.538977},
              {latitude: 48.208715, longitude: 11.540441},
              {latitude: 48.208511, longitude: 11.540959},
              {latitude: 48.207536, longitude: 11.541611},
              {latitude: 48.207633, longitude: 11.54209},
            ]}
            //fillColor={'rbga(100,100,200,0.3)'} // fallback for when `strokeColors` is not supported by the map-provider
            strokeColor="#FE9203" // fallback for when `strokeColors` is not supported by the map-provider
            //fillColor="#FE9203"
            fillOpacity={0.05}
            strokeWidth={5}
          />

          <Polygon
            coordinates={[
              {latitude: 48.211732, longitude: 11.543079},
              {latitude: 48.214859, longitude: 11.543277},
              {latitude: 48.214682, longitude: 11.547716},
              {latitude: 48.213639, longitude: 11.553459},
              {latitude: 48.212814, longitude: 11.55315},
              {latitude: 48.209653, longitude: 11.552891},

              {latitude: 48.208342, longitude: 11.552561},
              {latitude: 48.208357, longitude: 11.551128},
              {latitude: 48.20886, longitude: 11.546278},
              {latitude: 48.211604, longitude: 11.546507},
            ]}
            //fillColor={'rbga(100,100,200,0.3)'} // fallback for when `strokeColors` is not supported by the map-provider
            strokeColor="#A142E0" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={5}
          />

          <Marker
            coordinate={{latitude: 48.209238, longitude: 11.542533}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicture} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.204379, longitude: 11.546518}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicture} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.206913, longitude: 11.534541}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicture} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.214646, longitude: 11.5344}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicture} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.207536, longitude: 11.541611}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicture} />
          </Marker>

          <Marker
            coordinate={{latitude: 48.211732, longitude: 11.543079}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicturep} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.214682, longitude: 11.547716}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicturep} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.212814, longitude: 11.55315}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicturep} />
          </Marker>
          <Marker
            coordinate={{latitude: 48.208357, longitude: 11.551128}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo} source={yourPicturep} />
          </Marker>

          <Marker
            coordinate={{latitude: 48.211139, longitude: 11.549351}}
            onSelect={() => console.log('onSelect', arguments)}
            onDrag={() => console.log('onDrag', arguments)}
            onDragStart={() => console.log('onDragStart', arguments)}
            draggable>
            <Image style={styles.tinyLogo3} source={yourPictureu} />

            <Callout style={{borderRadius: 30}}>
              <View
                style={{
                  flexDirection: 'column',
                  width: 300,
                  height: 200,
                  padding: 0,
                  borderRadius: 30,
                }}>
                <View style={styles.body}>
                  <Image style={styles.image} source={yourPicture} />

                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Text style={styles.username}>send message</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Text style={styles.username}>view statistics</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Text style={styles.username}>compare statistics</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Callout>
          </Marker>
        </MapView>

        <View style={styles.bottom}>
          <View>
            <TouchableOpacity style={styles.myButton}>
              <Image
                source={require('./images/tower.png')}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
