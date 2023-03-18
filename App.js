import * as React from 'react';


import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.bgstyle}>
      

        
        <Image style={styles.cartImage} source={require('./assets/cart.png')} />
        <Header
          backgroundColor={''}
          centerComponent={{
            text: 'SmartCart ',
            style: { color: 'white', fontSize: 20 },
          }}
        />

        <View style={styles.textinputContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ searchText: text })}
            placeholder={'Type here for products  '}
            placeholderTextColor={'white'}
          />
          <TouchableOpacity
            style={styles.scanbutton}
            onPress={() => this.handleSearch(searchText)}>
            <Text style={styles.scanbuttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },

  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 50,
    height: 50,
  },

  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'black',
    marginTop: 20,
  },

  scanbuttonText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Rajdhani_600SemiBold',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 27,
    marginTop: 10,
  },

  textinput: {
    width: '57%',
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: 'orange',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    margintop: 70,
  },

  cartImage: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },
 
 bgstyle:{
   backgroundColor:"#D3D3D3",
   height:"100%",
   
 }
});
